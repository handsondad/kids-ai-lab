// 关键词规则的安全检查。它只能发现写在材料和步骤里的已知风险，不能替代大人的判断；结果里每次都这样说明。
// level: block（不生成实验页）> high（危险步骤由大人操作）> medium（大人在旁指导）> low。

export const LEVELS = ['low', 'medium', 'high', 'block'];
const rank = (level) => LEVELS.indexOf(level);

export const RULES = [
  { id: 'mains', label: '市电 / 插座', level: 'block', words: ['220v', '220伏', '市电', '插座', '插线板', '家用电源'],
    advice: '儿童实验只用 1.5V 干电池级别的低压电源，绝不接市电。' },
  { id: 'toxic-gas', label: '会产生有毒气体的混合', level: 'block', all: [['84消毒', '漂白', '次氯酸'], ['洁厕', '盐酸', '醋', '氨水', '酸']],
    advice: '含氯漂白剂与酸或氨混合会放出有毒气体，任何年龄都不要做。' },
  { id: 'strong-chemicals', label: '强酸强碱 / 危险化学品', level: 'block',
    words: ['浓硫酸', '浓盐酸', '浓硝酸', '氢氧化钠', '烧碱', '火碱', '水银', '汞', '金属钠', '白磷', '高锰酸钾和甘油'],
    advice: '家庭和课堂儿童实验不使用这些化学品，换成小苏打、醋、柠檬汁等食品级材料。' },
  { id: 'cryogen-explosive', label: '液氮 / 易爆物', level: 'block', words: ['液氮', '火药', '鞭炮', '烟花', '汽油', '煤油', '打火机油', '丁烷'],
    advice: '这类材料有冻伤、爆炸或爆燃风险，不适合儿童实验。' },

  { id: 'open-flame', label: '明火', level: 'high', words: ['火柴', '打火机', '蜡烛', '点燃', '点火', '燃烧', '酒精灯', '火焰', '烧一下'],
    advice: '点火和靠近火焰的操作由大人完成；扎起长发，在防火台面上做，旁边备一杯水，用完立刻熄灭。' },
  { id: 'alcohol', label: '酒精', level: 'high', words: ['酒精', '乙醇', '消毒酒精'],
    advice: '酒精易燃，远离火源和热源；少量使用，用完盖紧放回孩子够不到的地方。' },
  { id: 'dry-ice', label: '干冰', level: 'high', words: ['干冰'],
    advice: '大人戴隔热手套操作，绝不放进密封容器，保持通风，孩子不要直接用手碰。' },
  { id: 'boiling', label: '开水 / 加热', level: 'high', words: ['开水', '沸水', '煮沸', '烧开', '微波炉', '电磁炉', '燃气灶', '熨斗', '加热到'],
    advice: '倒开水、加热都由大人完成；孩子只用不超过 50°C 的温水，容器放稳在桌面中间。' },
  { id: 'blades', label: '刀具', level: 'high', words: ['美工刀', '刀片', '小刀', '水果刀', '锯子', '钢锯'],
    advice: '切割由大人完成，孩子只用儿童安全剪刀。' },
  { id: 'button-battery', label: '纽扣电池', level: 'high', words: ['纽扣电池', 'cr2032', '锂电池', '锂电', '充电宝'],
    advice: '纽扣电池误吞会在数小时内灼伤食道；锂电池不能拆、不能短路。用完立刻收好，小龄孩子换用 AA/AAA 干电池并由大人装卸。' },
  { id: 'strong-magnets', label: '强磁铁', level: 'high', words: ['强磁', '钕磁铁', '钕铁硼', '磁珠'], youngAge: 14,
    advice: '误吞两颗以上强磁会夹伤肠道。小磁铁数清数量，用完全部收回。' },
  { id: 'laser-sun', label: '激光 / 直视强光', level: 'high', words: ['激光笔', '激光', '直视太阳', '看太阳', '放大镜聚光', '聚焦阳光'],
    advice: '不要用激光或强光对着眼睛；观察太阳只用合格的日食眼镜或小孔成像，放大镜聚光会点燃纸张。' },
  { id: 'peroxide', label: '过氧化氢（双氧水）', level: 'high', words: ['双氧水', '过氧化氢', '大象牙膏'],
    advice: '只用药店 3% 浓度，大人倒取；戴护目镜和手套，泡沫不要碰眼睛和嘴。' },

  { id: 'warm-water', label: '热水', level: 'medium', words: ['热水'],
    advice: '水温控制在 50°C 以下，先由大人试温。' },
  { id: 'hot-glue', label: '热熔胶枪', level: 'medium', words: ['热熔胶', '胶枪'], youngAge: 8,
    advice: '胶枪头和刚挤出的胶很烫，小龄孩子由大人打胶。' },
  { id: 'scissors', label: '剪刀', level: 'medium', words: ['剪刀', '剪开', '剪下'], youngAge: 5,
    advice: '用圆头儿童安全剪刀，剪的时候刀口朝外，不拿着剪刀走动。' },
  { id: 'glass', label: '玻璃器皿', level: 'medium', words: ['玻璃杯', '玻璃瓶', '玻璃罐', '玻璃'],
    advice: '玻璃容易碎，能换成透明塑料杯就换；必须用玻璃时放在桌面中间，大人负责搬动。' },
  { id: 'balloon', label: '气球', level: 'medium', words: ['气球'], youngAge: 8,
    advice: '未充气或破掉的气球碎片有窒息风险，8 岁以下孩子玩气球时大人全程在场，碎片立刻收走。' },
  { id: 'small-parts', label: '小零件（窒息风险）', level: 'medium', words: ['珠子', '弹珠', '硬币', '纽扣', '豆子', '小石子', '回形针', '图钉', '大头针', '小零件'], youngAge: 4,
    advice: '3 岁以下（含爱往嘴里放东西的孩子）不要接触小零件；图钉、大头针换成胶带。' },
  { id: 'pressure', label: '产气后密封（压力）', level: 'medium', all: [['小苏打', '泡腾片', '酵母', '碳酸', '可乐', '曼妥思'], ['密封', '盖紧', '拧紧', '塞紧', '瓶盖']],
    advice: '产气反应不要拧紧瓶盖或密封，瓶口不要对着脸；用气球套口时大人按住。' },
  { id: 'acid-splash', label: '醋 / 柠檬汁溅入眼睛', level: 'medium', words: ['醋', '柠檬汁', '白醋'],
    advice: '戴护目镜或至少不要凑近看反应；溅到眼睛立即用清水冲洗。' },
  { id: 'batteries', label: '干电池', level: 'medium', words: ['电池', '电线', '导线', '小灯泡'],
    advice: '只用 AA/AAA 等低压干电池；不要用导线直接连接电池两极（短路发热），用完取下电池。' },
  { id: 'irritants', label: '刺激皮肤的材料', level: 'medium', words: ['硼砂', '碘酒', '碘伏', '洗洁精', '肥皂水', '胶水', '502'],
    advice: '大人取用，孩子戴手套或做完立刻洗手；502 胶由大人操作。' },
  { id: 'strings-bags', label: '绳子 / 塑料袋', level: 'medium', words: ['塑料袋', '保鲜袋', '长绳', '绳子', '毛线'], youngAge: 3, onlyYoung: true,
    advice: '3 岁以下孩子不要独自接触塑料袋和长绳，用完收起来。' },
  { id: 'living-things', label: '小动物 / 植物', level: 'medium', words: ['蚂蚁', '昆虫', '蜗牛', '蚯蚓', '蜜蜂', '花粉', '蘑菇'],
    advice: '观察后放回原处，不吃不明植物和蘑菇，花粉过敏要提前确认，做完洗手。' },
];

const textOf = (parts) => parts.flat().filter((part) => typeof part === 'string').join('\n').toLowerCase();

/** age is in years; leave it undefined when the child's age is not known yet. */
export function safetyCheck({ materials = [], steps = [], age } = {}) {
  const haystack = textOf([materials, steps]);
  const hazards = [];
  for (const rule of RULES) {
    let matched = [];
    if (rule.all) {
      const groups = rule.all.map((group) => group.filter((word) => haystack.includes(word)));
      if (groups.every((group) => group.length)) matched = groups.flat();
    } else {
      matched = rule.words.filter((word) => haystack.includes(word));
    }
    if (!matched.length) continue;
    const young = rule.youngAge !== undefined && age !== undefined && age < rule.youngAge;
    if (rule.onlyYoung && !young) continue;
    const level = young && rule.level === 'medium' ? 'high' : rule.level;
    hazards.push({ id: rule.id, label: rule.label, level, matched: [...new Set(matched)], advice: rule.advice, ...(young ? { note: `孩子未满 ${rule.youngAge} 岁，按更高风险处理。` } : {}) });
  }
  hazards.sort((a, b) => rank(b.level) - rank(a.level));
  const level = hazards.reduce((top, hazard) => (rank(hazard.level) > rank(top) ? hazard.level : top), 'low');
  const supervision = level === 'high' || level === 'block' ? 'close_supervision'
    : level === 'medium' || age === undefined || age < 8 ? 'guided' : 'independent';
  return {
    level,
    blocked: level === 'block',
    supervision,
    hazards,
    general: [
      '开始前大人先把材料和步骤完整读一遍。',
      '实验材料不入口（专门的食品实验除外），做完洗手、收拾台面。',
      '孩子觉得害怕或不舒服时随时停下。',
    ],
    disclaimer: '这是按关键词做的检查，只能发现写进材料和步骤里的已知风险，不能代替大人现场判断。',
  };
}
