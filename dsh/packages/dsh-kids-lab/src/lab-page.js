// One self-contained HTML page per experiment: no network, no external scripts. Content is rendered here
// (it prints and reads without JavaScript); the small inline script only adds checklists, the timer,
// the observation log, read-aloud and stars, and keeps progress in this browser's localStorage.

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ESCAPES[char]);
export const safeUrl = (value) => {
  try {
    const url = new URL(String(value));
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';
  } catch { return ''; }
};

const SAFETY_TEXT = { low: '低风险', medium: '需要大人指导', high: '危险步骤由大人操作' };
const SUPERVISION_TEXT = { independent: '可以自己做', guided: '大人在旁指导', close_supervision: '大人全程陪同' };

const list = (items, cls = '') => (items.length ? `<ul class="${cls}">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>` : '');
const section = (icon, title, body, attrs = '') => `<section class="card"${attrs}><h2><span aria-hidden="true">${icon}</span> ${esc(title)}</h2>${body}</section>`;
const say = (text) => `<button type="button" class="say" data-say="${esc(text)}" aria-label="朗读">🔊</button>`;

export function renderLabPage(lab) {
  const ages = `${lab.age_min}–${lab.age_max} 岁`;
  const hazards = lab.safety.hazards;
  const dialogue = lab.dialogue.map((turn) => `
      <div class="bubble nian">${say(turn.nian)}<b>小念</b><p>${esc(turn.nian)}</p></div>
      ${turn.dad ? `<div class="bubble dad">${say(turn.dad)}<b>爸爸</b><p>${esc(turn.dad)}</p></div>` : ''}`).join('');
  const guesses = lab.guesses.length
    ? `<div class="guesses" role="group" aria-label="选一个猜想">${lab.guesses.map((guess, index) =>
      `<button type="button" class="guess" data-guess="${index}">${esc(guess)}</button>`).join('')}</div>`
    : '';
  const checklist = (items, kind) => `<ol class="checks" data-kind="${kind}">${items.map((item, index) =>
    `<li><label><input type="checkbox" data-check="${kind}-${index}"><span>${esc(item)}</span></label></li>`).join('')}</ol>`;
  const links = [
    ...lab.playground.map((game) => `<li>🎮 <a href="${esc(safeUrl(game.url))}" target="_blank" rel="noopener">${esc(game.title)}</a>（科学小游戏大冒险）</li>`),
    ...lab.kb_refs.map((ref) => `<li>📚 ${esc(ref.title ?? ref.ref)} <code>${esc(ref.ref)}</code></li>`),
    ...lab.sources.filter((source) => safeUrl(source.url)).map((source) =>
      `<li>🌐 <a href="${esc(safeUrl(source.url))}" target="_blank" rel="noopener">${esc(source.title || source.url)}</a></li>`),
  ];
  const data = JSON.stringify({ slug: lab.slug, steps: lab.steps.length, materials: lab.materials.length }).replace(/</g, '\\u003c');

  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(lab.emoji)} ${esc(lab.title)} · 孩子的 AI 实验室</title>
<style>
:root { --ink:#1f2937; --soft:#6b7280; --bg:#fff8ec; --card:#ffffff; --sun:#ffb703; --sky:#4d96ff; --leaf:#22a06b; --rose:#e5484d; --line:#f1e4cc; }
* { box-sizing: border-box; }
body { margin:0; font: 17px/1.7 "PingFang SC","Microsoft YaHei","Noto Sans SC",system-ui,sans-serif; color:var(--ink); background:var(--bg); }
main { max-width: 880px; margin: 0 auto; padding: 20px 16px 64px; }
header.hero { background: linear-gradient(135deg,#ffe8a3,#ffd6e0 60%,#cfe8ff); border-radius: 24px; padding: 24px; margin-bottom: 18px; }
.hero h1 { margin: 0 0 8px; font-size: clamp(26px, 5vw, 38px); line-height: 1.25; }
.hero .emoji { font-size: 56px; line-height: 1; display:block; margin-bottom: 6px; }
.chips { display:flex; flex-wrap:wrap; gap:8px; }
.chip { background:#fff; border-radius:999px; padding:2px 12px; font-size:14px; border:1px solid var(--line); }
.chip.low { color: var(--leaf); } .chip.medium { color:#b45309; } .chip.high { color: var(--rose); font-weight:700; }
.stars { font-size: 26px; letter-spacing: 4px; margin-top: 10px; }
.alert { background:#fff1f2; border:2px solid var(--rose); color:#9f1239; border-radius:16px; padding:12px 16px; margin-bottom:18px; font-weight:600; }
.card { background:var(--card); border-radius:20px; padding:18px 20px; margin-bottom:16px; box-shadow: 0 2px 0 var(--line); }
.card h2 { margin:0 0 10px; font-size:22px; }
.question { font-size: 21px; font-weight: 700; }
.bubble { position:relative; border-radius:16px; padding:10px 44px 10px 14px; margin:10px 0; }
.bubble p { margin: 2px 0 0; } .bubble b { font-size: 14px; }
.bubble.nian { background:#e8f3ff; margin-right: 15%; } .bubble.dad { background:#fff4d6; margin-left: 15%; }
.say { position:absolute; right:8px; top:8px; border:0; background:#fff; border-radius:50%; width:30px; height:30px; cursor:pointer; }
.guesses { display:flex; flex-wrap:wrap; gap:10px; margin: 8px 0 12px; }
.guess { font: inherit; border:2px solid var(--sky); color:var(--sky); background:#fff; border-radius:14px; padding:6px 14px; cursor:pointer; }
.guess[aria-pressed="true"] { background: var(--sky); color:#fff; }
textarea, input[type=text] { width:100%; font: inherit; border:2px solid var(--line); border-radius:12px; padding:8px 10px; background:#fffdf8; }
.checks { padding-left: 0; list-style: none; counter-reset: step; }
.checks li { margin: 8px 0; }
.checks label { display:flex; gap:10px; align-items:flex-start; cursor:pointer; }
.checks input { width:22px; height:22px; margin-top:4px; flex: none; accent-color: var(--leaf); }
.checks input:checked + span { color: var(--soft); text-decoration: line-through; }
.bar { height: 12px; background:#f3ead9; border-radius: 999px; overflow:hidden; margin: 6px 0 10px; }
.bar > i { display:block; height:100%; width:0; background: linear-gradient(90deg,var(--sun),var(--leaf)); transition: width .3s; }
.row { display:flex; gap:8px; align-items:center; flex-wrap:wrap; }
.btn { font: inherit; border:0; border-radius:14px; padding:8px 16px; background: var(--sun); color:#3b2500; cursor:pointer; font-weight:700; }
.btn.ghost { background:#fff; border:2px solid var(--line); color: var(--ink); font-weight: 400; }
.timer { font-variant-numeric: tabular-nums; font-size: 22px; min-width: 80px; }
.obs { display:grid; grid-template-columns: 90px 1fr; gap:8px; margin: 8px 0; }
.reveal[hidden] { display:none; }
.hazard { border-left: 6px solid var(--sun); padding: 4px 12px; margin: 8px 0; background:#fffaf0; border-radius: 8px; }
.hazard.high { border-color: var(--rose); background:#fff5f5; }
.muted { color: var(--soft); font-size: 14px; }
code { background:#f6f0e4; padding: 0 6px; border-radius: 6px; font-size: 13px; }
@media (max-width: 560px) { .bubble.nian { margin-right: 0; } .bubble.dad { margin-left: 0; } .obs { grid-template-columns: 1fr; } }
@media print { body { background:#fff; } .say, .btn, .guesses button:not([aria-pressed="true"]) { display:none; } .reveal[hidden] { display:block; } .card { box-shadow:none; border:1px solid #ddd; } }
</style>
</head>
<body>
<main>
<header class="hero">
  <span class="emoji" aria-hidden="true">${esc(lab.emoji)}</span>
  <h1>${esc(lab.title)}</h1>
  <div class="chips">
    <span class="chip">👧 ${esc(ages)}</span>
    <span class="chip">⏱️ 约 ${esc(lab.duration_min)} 分钟</span>
    <span class="chip ${esc(lab.safety.level)}">🛡️ ${esc(SAFETY_TEXT[lab.safety.level] ?? lab.safety.level)}</span>
    <span class="chip">🧑‍🤝‍🧑 ${esc(SUPERVISION_TEXT[lab.safety.supervision] ?? lab.safety.supervision)}</span>
  </div>
  <div class="stars" aria-live="polite" data-stars>☆☆☆</div>
  <p class="muted" data-stars-hint>猜一猜、做完全部步骤、写下一条观察，就能集齐三颗星。</p>
</header>
${lab.safety.level === 'high' ? `<div class="alert" role="alert">⚠️ 这个实验里有危险步骤：${esc(hazards.filter((hazard) => hazard.level === 'high').map((hazard) => hazard.label).join('、'))}。请大人先读完下面的安全提醒，再一起开始。</div>` : ''}

${section('🤔', '我们想知道', `<p class="question">${esc(lab.question)} ${say(lab.question)}</p>${dialogue}`)}

${section('🔮', '先猜一猜', `${guesses}<label class="muted" for="my-guess">把你的猜想和理由写下来（科学家也是先猜再验证的）：</label>
  <textarea id="my-guess" rows="2" data-field="guess" placeholder="我觉得……因为……"></textarea>`)}

${section('🧰', '准备材料', checklist(lab.materials, 'material'))}

${section('👣', '动手做', `<div class="bar" aria-hidden="true"><i data-progress></i></div>
  ${checklist(lab.steps, 'step')}
  <div class="row"><button type="button" class="btn ghost" data-timer>⏱️ 开始计时</button><span class="timer" data-time>00:00</span></div>`)}

${section('👀', '我的观察', `<p class="muted">每看到一个变化就记一条，时间可以写“第 2 分钟”。</p>
  <div data-observations></div>
  <button type="button" class="btn ghost" data-add-observation>＋ 再记一条</button>`)}

${section('💡', '揭晓原理', `<button type="button" class="btn" data-reveal>我做完了，揭晓！</button>
  <div class="reveal" hidden data-reveal-body>
    ${lab.expected.length ? `<h3>大概率会看到</h3>${list(lab.expected)}` : ''}
    <h3>为什么会这样 ${say(lab.principle)}</h3><p>${esc(lab.principle)}</p>
    ${lab.key_concepts.length ? `<h3>关键词</h3>${list(lab.key_concepts)}` : ''}
    <p class="muted">和你的猜想一样吗？不一样也很棒——发现“没想到”正是科学最有意思的地方。</p>
  </div>`)}

${lab.change.length || lab.keep.length ? section('🔁', '变量与对照', `${lab.change.length ? `<h3>可以改变的</h3>${list(lab.change)}` : ''}${lab.keep.length ? `<h3>要保持一样的</h3>${list(lab.keep)}` : ''}`) : ''}

${lab.extensions.length ? section('🚀', '再挑战一下', list(lab.extensions)) : ''}

${section('⚠️', '安全提醒', `${hazards.map((hazard) => `<div class="hazard ${esc(hazard.level)}"><b>${esc(hazard.label)}</b>：${esc(hazard.advice)}${hazard.note ? ` <span class="muted">${esc(hazard.note)}</span>` : ''}</div>`).join('')}
  ${list([...lab.safety_notes, ...lab.safety.general])}
  <p class="muted">${esc(lab.safety.disclaimer)}</p>`)}

${links.length ? section('🔗', '继续探索', `<ul>${links.join('')}</ul>`) : ''}

<p class="row"><button type="button" class="btn ghost" data-reset>重新开始</button><button type="button" class="btn ghost" onclick="window.print()">🖨️ 打印实验单</button></p>
<p class="muted">孩子的 AI 实验室 · ${esc(lab.created_at.slice(0, 10))} 生成${lab.sources.length ? '' : ' · 本页由 AI 根据知识库整理，请大人先核对'}</p>
</main>
<script type="application/json" id="lab-data">${data}</script>
<script>
(() => {
  const meta = JSON.parse(document.getElementById('lab-data').textContent);
  const key = 'kids-lab:' + meta.slug;
  let state = {};
  try { state = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { state = {}; }
  const save = () => { try { localStorage.setItem(key, JSON.stringify(state)); } catch (e) {} stars(); };
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  const voice = () => (speechSynthesis.getVoices() || []).find((v) => /zh[-_]CN/i.test(v.lang));
  $$('[data-say]').forEach((b) => b.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(b.dataset.say); u.lang = 'zh-CN'; u.rate = 0.95;
    const v = voice(); if (v) u.voice = v;
    speechSynthesis.speak(u);
  }));

  state.checks = state.checks || {};
  $$('[data-check]').forEach((c) => {
    c.checked = !!state.checks[c.dataset.check];
    c.addEventListener('change', () => { state.checks[c.dataset.check] = c.checked; progress(); save(); });
  });
  const progress = () => {
    const steps = $$('[data-check^="step-"]');
    const done = steps.filter((c) => c.checked).length;
    $('[data-progress]').style.width = (steps.length ? (done / steps.length) * 100 : 0) + '%';
  };

  $$('[data-guess]').forEach((b) => {
    b.setAttribute('aria-pressed', String(state.choice === b.dataset.guess));
    b.addEventListener('click', () => { state.choice = b.dataset.guess; $$('[data-guess]').forEach((x) => x.setAttribute('aria-pressed', String(x === b))); save(); });
  });
  const guess = $('[data-field="guess"]');
  guess.value = state.guess || '';
  guess.addEventListener('input', () => { state.guess = guess.value; save(); });

  state.obs = state.obs && state.obs.length ? state.obs : [{ t: '', v: '' }];
  const box = $('[data-observations]');
  const drawObs = () => {
    box.innerHTML = '';
    state.obs.forEach((o, i) => {
      const row = document.createElement('div'); row.className = 'obs';
      const t = document.createElement('input'); t.type = 'text'; t.placeholder = '什么时候'; t.value = o.t;
      const v = document.createElement('input'); v.type = 'text'; v.placeholder = '我看到了……'; v.value = o.v;
      t.addEventListener('input', () => { state.obs[i].t = t.value; save(); });
      v.addEventListener('input', () => { state.obs[i].v = v.value; save(); });
      row.append(t, v); box.append(row);
    });
  };
  $('[data-add-observation]').addEventListener('click', () => { state.obs.push({ t: '', v: '' }); drawObs(); save(); });

  let started = 0, elapsed = state.elapsed || 0, tick = null;
  const show = () => { const s = Math.floor((elapsed + (started ? Date.now() - started : 0)) / 1000); $('[data-time]').textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
  $('[data-timer]').addEventListener('click', (e) => {
    if (started) { elapsed += Date.now() - started; started = 0; clearInterval(tick); e.target.textContent = '⏱️ 继续计时'; state.elapsed = elapsed; save(); }
    else { started = Date.now(); tick = setInterval(show, 250); e.target.textContent = '⏸️ 暂停'; }
  });

  const reveal = () => { $('[data-reveal-body]').hidden = false; $('[data-reveal]').hidden = true; };
  $('[data-reveal]').addEventListener('click', () => { state.revealed = true; reveal(); save(); });
  $('[data-reset]').addEventListener('click', () => { if (confirm('清空这次的记录，重新开始？')) { localStorage.removeItem(key); location.reload(); } });

  const stars = () => {
    const steps = $$('[data-check^="step-"]');
    const got = [Boolean(state.choice !== undefined || (state.guess || '').trim()), steps.length > 0 && steps.every((c) => c.checked), state.obs.some((o) => (o.v || '').trim())].filter(Boolean).length;
    $('[data-stars]').textContent = '★'.repeat(got) + '☆'.repeat(3 - got);
    if (got === 3) $('[data-stars-hint]').textContent = '三颗星集齐！你完成了一次真正的科学探究 🎉';
  };

  drawObs(); progress(); show(); if (state.revealed) reveal(); stars();
})();
</script>
</body>
</html>
`;
}
