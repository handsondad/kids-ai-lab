// Plain lexical ranking that works for Chinese without a segmenter: whole query terms count fully,
// CJK character bigrams count a little, so "鸡蛋浮起来" still finds "浮起来的鸡蛋".

const SEPARATORS = /[\s,，。、;；:：!！?？()（）\[\]【】{}<>《》"'“”‘’`/\\|+=*#~^&%$@·…—\-_]+/u;
const CJK = /[\u3400-\u9fff\uf900-\ufaff]/u;
// Bigrams that almost every question contains; as fragments they rank nothing.
const FILLER_GRAMS = new Set(['孩子', '怎么', '什么', '么办', '么是', '是什', '可以', '一个', '我们', '如何', '一下', '这个', '那个', '有没', '没有', '为什', '的是']);

export function normalize(value) {
  return String(value ?? '').toLowerCase();
}

export function queryTerms(query) {
  const terms = normalize(query).split(SEPARATORS).filter(Boolean);
  const whole = [...new Set(terms)];
  const grams = new Set();
  for (const term of whole) {
    const chars = [...term];
    if (chars.length > 2 && chars.some((char) => CJK.test(char))) {
      for (let index = 0; index < chars.length - 1; index++) {
        const gram = chars[index] + chars[index + 1];
        if (CJK.test(gram) && !FILLER_GRAMS.has(gram)) grams.add(gram);
      }
    }
  }
  for (const term of whole) grams.delete(term);
  return { whole, grams: [...grams], phrase: normalize(query).trim() };
}

const occurrences = (haystack, needle, cap) => {
  if (!needle) return 0;
  let count = 0;
  let from = 0;
  while (count < cap) {
    const at = haystack.indexOf(needle, from);
    if (at === -1) break;
    count++;
    from = at + needle.length;
  }
  return count;
};

/**
 * fields: [{ text, weight }], already lower-cased. Returns 0 when nothing matched.
 * The score rewards covering more of the query, so one rare word does not beat a card that matches all of it.
 */
export function scoreFields(fields, terms) {
  const { whole, grams, phrase } = terms;
  if (!whole.length) return 0;
  let score = 0;
  let matched = 0;
  for (const term of whole) {
    let hit = 0;
    for (const field of fields) hit += occurrences(field.text, term, field.cap ?? 3) * field.weight;
    if (hit) matched++;
    score += hit;
  }
  let gramHits = 0;
  for (const gram of grams) {
    let hit = 0;
    for (const field of fields) hit += occurrences(field.text, gram, field.cap ?? 2) * field.weight;
    if (hit) gramHits++;
    score += hit * 0.35;
  }
  if (phrase && phrase.length > 1) {
    for (const field of fields) if (field.phrase && field.text.includes(phrase)) score += field.phrase;
  }
  if (!score) return 0;
  const coverage = grams.length ? (matched + gramHits) / (whole.length + grams.length) : matched / whole.length;
  return score * (0.4 + 0.6 * coverage);
}

/** A short window of text around the first term found, whitespace collapsed. */
export function snippet(body, terms, size = 140) {
  const flat = String(body ?? '').replace(/[#>*`|]/g, ' ').replace(/\s+/g, ' ').trim();
  const lower = flat.toLowerCase();
  let at = -1;
  for (const term of [...terms.whole, ...terms.grams]) {
    const found = lower.indexOf(term);
    if (found !== -1 && (at === -1 || found < at)) at = found;
  }
  if (at === -1) return flat.slice(0, size);
  const start = Math.max(0, at - Math.floor(size / 3));
  const piece = flat.slice(start, start + size);
  return `${start > 0 ? '…' : ''}${piece}${start + size < flat.length ? '…' : ''}`;
}
