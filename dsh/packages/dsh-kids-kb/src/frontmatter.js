// The knowledge base writes a small, regular YAML subset in its frontmatter: scalars, `- item` lists,
// one level of `key: value` maps (age_range), and occasional `[a, b]` inline lists. This reads exactly that.

const scalar = (raw) => {
  const value = raw.trim();
  if (value === '') return '';
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    const inner = value.slice(1, -1);
    return value.startsWith("'") ? inner.replaceAll("''", "'") : inner.replaceAll('\\"', '"');
  }
  if (value.startsWith('[') && value.endsWith(']')) {
    return value.slice(1, -1).split(',').map((item) => scalar(item)).filter((item) => item !== '');
  }
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'null' || value === '~') return null;
  return value;
};

const stripComment = (line) => {
  if (/["']/.test(line)) return line;
  const at = line.search(/\s#/);
  return at === -1 ? line : line.slice(0, at);
};

export function parseFrontmatter(source) {
  const textValue = String(source ?? '').replace(/^\uFEFF/, '');
  const lines = textValue.split(/\r?\n/);
  if (lines[0]?.trim() !== '---') return { data: {}, body: textValue, frontmatter: false };
  const end = lines.findIndex((line, index) => index > 0 && line.trim() === '---');
  if (end === -1) return { data: {}, body: textValue, frontmatter: false };
  const data = {};
  let key = null;
  for (const rawLine of lines.slice(1, end)) {
    const line = stripComment(rawLine);
    if (!line.trim()) continue;
    const indented = /^\s/.test(line);
    if (!indented) {
      const match = line.match(/^([A-Za-z0-9_\-]+)\s*:\s*(.*)$/);
      if (!match) { key = null; continue; }
      key = match[1];
      data[key] = match[2].trim() === '' ? null : scalar(match[2]);
      continue;
    }
    if (!key) continue;
    const item = line.match(/^\s+-\s*(.*)$/);
    if (item) {
      if (!Array.isArray(data[key])) data[key] = [];
      data[key].push(scalar(item[1]));
      continue;
    }
    const pair = line.match(/^\s+([A-Za-z0-9_\-]+)\s*:\s*(.*)$/);
    if (pair) {
      if (data[key] === null || typeof data[key] !== 'object' || Array.isArray(data[key])) data[key] = {};
      data[key][pair[1]] = scalar(pair[2]);
    }
  }
  return { data, body: lines.slice(end + 1).join('\n'), frontmatter: true };
}
