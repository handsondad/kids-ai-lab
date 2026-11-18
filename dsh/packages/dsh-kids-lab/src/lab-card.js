// Markdown for an experiment: the card saved beside the page, and the draft experiment_card written back to
// 趣味科学实验库 in that library's own frontmatter format (see _templates/experiment_card_template.md).

export const EXPERIMENT_FOLDERS = {
  earth_space: ['earth_science', 'astronomy_space'],
  electricity_magnets: ['physics'],
  environment: ['environment'],
  forces_motion: ['physics'],
  light_sound: ['physics'],
  materials_reactions: ['chemistry', 'materials'],
  plants_life: ['biology'],
  scientific_method: ['scientific_method'],
  simple_machines: ['physics', 'engineering_design'],
  thermal_energy: ['physics', 'energy'],
  weather_water: ['earth_science'],
};

export const TOPIC_CLUSTERS = ['observation_and_measurement', 'variables_and_controls', 'randomness_and_probability', 'forces_and_motion',
  'friction_and_surfaces', 'simple_machines', 'air_and_flight', 'electricity_and_magnetism', 'elasticity_and_stress', 'fracture_and_failure',
  'thermal_energy_and_heat', 'thermal_expansion', 'states_of_matter', 'mixtures_and_reactions', 'solutions_and_solubility', 'acids_and_bases',
  'light_and_shadow', 'sound_and_vibration', 'plants_and_growth', 'animals_and_ecosystems', 'food_webs_and_decomposition', 'weather_and_water',
  'clouds_and_precipitation', 'earth_and_space'];

export const EXPERIMENT_TYPES = ['observation', 'comparison_test', 'build_and_test', 'measurement_activity', 'model_demo', 'reaction_demo',
  'growth_tracking', 'field_observation'];

const bullets = (items) => items.map((item) => `- ${item}`).join('\n');
const numbered = (items) => items.map((item, index) => `${index + 1}. ${item}`).join('\n');

const yamlScalar = (value) => {
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  const text = String(value ?? '');
  if (text === '' || /[:#'"[\]{},&*!|>%@`]/.test(text) || /^\s|\s$/.test(text) || /^(true|false|null|~|-?\d+(\.\d+)?)$/.test(text)) {
    return `"${text.replaceAll('\\', '\\\\').replaceAll('"', '\\"')}"`;
  }
  return text;
};
const yamlList = (key, items) => (items.length ? `${key}:\n${items.map((item) => `  - ${yamlScalar(item)}`).join('\n')}` : `${key}: []`);

const sourceLines = (lab) => {
  const lines = [];
  for (const source of lab.sources) lines.push(`- 网络来源：[${source.title || source.url}](${source.url})${source.retrieved ? `（检索于 ${source.retrieved}）` : ''}`);
  for (const ref of lab.kb_refs) lines.push(`- 知识库参考：\`${ref.ref}\`${ref.title ? ` ${ref.title}` : ''}`);
  for (const game of lab.playground) lines.push(`- 科学小游戏大冒险：[${game.title}](${game.url})`);
  if (!lab.sources.length) lines.push('- 人工整理草案：由孩子的 AI 实验室（DSH 实验模式）基于现有知识库模式整理，没有外部来源，发布前请人工核对。');
  return lines;
};

const body = (lab) => [
  `# 实验简介\n\n${lab.question}${lab.summary ? `\n\n${lab.summary}` : ''}\n\n适合 ${lab.age_min}–${lab.age_max} 岁，约 ${lab.duration_min} 分钟。`,
  lab.dialogue.length ? `## 小念问爸爸\n\n${lab.dialogue.map((turn) => `- 小念：${turn.nian}${turn.dad ? `\n- 爸爸：${turn.dad}` : ''}`).join('\n')}` : null,
  lab.guesses.length ? `## 先猜一猜\n\n${bullets(lab.guesses)}` : null,
  `## 准备材料\n\n${bullets(lab.materials)}`,
  `## 操作步骤\n\n${numbered(lab.steps)}`,
  lab.expected.length ? `## 预期观察结果\n\n${bullets(lab.expected)}` : null,
  `## 科学原理\n\n${lab.principle}${lab.key_concepts.length ? `\n\n**关键概念**：\n${bullets(lab.key_concepts)}` : ''}`,
  lab.change.length || lab.keep.length
    ? `## 变量与对照\n\n${lab.change.length ? `**可以改变的变量**：\n${bullets(lab.change)}\n\n` : ''}${lab.keep.length ? `**应保持一致的条件**：\n${bullets(lab.keep)}` : ''}`.trim()
    : null,
  `## 安全提醒\n\n${bullets([
    ...lab.safety.hazards.map((hazard) => `${hazard.label}：${hazard.advice}`),
    ...lab.safety_notes,
    ...lab.safety.general,
  ])}\n\n> ${lab.safety.disclaimer}`,
  lab.extensions.length ? `## 延展变体\n\n${bullets(lab.extensions)}` : null,
].filter(Boolean).join('\n\n');

/** The card beside index.html in the session folder. */
export function renderLabMarkdown(lab) {
  return `${body(lab)}\n\n## 来源说明\n\n${sourceLines(lab).join('\n')}\n`;
}

/** A draft experiment_card for 趣味科学实验库. status is always draft: a person reviews before publishing. */
export function renderKnowledgeCard(lab, { id, today }) {
  const front = [
    '---',
    'doc_type: experiment_card',
    `id: ${id}`,
    `title: ${lab.slug}`,
    `title_zh: ${yamlScalar(lab.title)}`,
    'status: draft',
    'language: zh-CN',
    `learning_level: ${lab.learning_level}`,
    yamlList('science_domains', EXPERIMENT_FOLDERS[lab.domain]),
    yamlList('topic_clusters', lab.topic_clusters),
    yamlList('experiment_types', lab.experiment_types),
    yamlList('materials', lab.materials),
    `duration_min: ${lab.duration_min}`,
    `safety_level: ${lab.safety.level}`,
    `supervision_level: ${lab.safety.supervision}`,
    'age_range:',
    `  min: ${lab.age_min}`,
    `  max: ${lab.age_max}`,
    `source_kind: ${lab.sources.length ? 'article_summary' : 'manual_curation'}`,
    yamlList('source_refs', lab.kb_refs.filter((ref) => ref.ref.startsWith('science/')).map((ref) => ref.ref.slice('science/'.length))),
    ...(lab.kb_refs.some((ref) => !ref.ref.startsWith('science/')) ? [yamlList('related', lab.kb_refs.filter((ref) => !ref.ref.startsWith('science/')).map((ref) => ref.ref))] : []),
    ...(lab.sources.length ? [yamlList('source_urls', lab.sources.map((source) => source.url))] : []),
    yamlList('aliases', lab.aliases),
    yamlList('search_terms', lab.search_terms),
    `last_reviewed: ${today}`,
    '---',
  ].join('\n');
  const hint = `${lab.title}：${lab.question}适合 ${lab.age_min}–${lab.age_max} 岁${lab.key_concepts.length ? `，学习${lab.key_concepts.join('、')}` : ''}。`;
  return `${front}\n\n${body(lab)}\n\n## 检索提示\n\n${hint}\n\n## 来源说明\n\n${sourceLines(lab).join('\n')}\n`;
}
