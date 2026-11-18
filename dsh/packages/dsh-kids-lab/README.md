# dsh-kids-lab

DSH 的「实验模式」，一起组成「孩子的 AI 实验室」。新建会话选中后，这个模式挂上 DSH 自带的文件、搜索、终端、Skill、联网搜索（`web_search` / `web_fetch`）、`present`、计划、压缩、提问和待办，再挂上知识库工具（来自 `@kids-ai-lab/dsh-kids-kb`）和本包的科学馆、实验工坊两个工具插件。标准模式看不到这些工具。包没有运行时依赖，只用 Node 24 自带模块。

典型一轮：家长说「孩子 7 岁，问为什么鸡蛋会沉，家里有盐、糖、杯子」，Agent 加载 skill `kids-lab-experiment`，先调 `kb_search` 和 `playground_search`，再用 `kb_read` 读卡片，接着调 `lab_safety_check`，然后 `lab_create_experiment`（出确认卡），最后用 `present` 交付页面。

| 工具 | 来源 | 说明 |
| --- | --- | --- |
| `kb_libraries` `kb_search` `kb_read` `kb_links` | dsh-kids-kb | 列出知识库、按库/类型/年龄/时长/安全等级检索、读全文（带引用和被引用）、顺着关联看其他库。见 `../dsh-kids-kb/README.md` |
| `playground_halls` | 科学馆 | 列出 sci-playground 的展馆、每个馆里的全部互动实验和进馆链接 |
| `playground_search` | 科学馆 | 检索互动游戏、科学百科里的「在家试一试」和小念与爸爸的科学对话，返回在线地址 |
| `lab_safety_check` | 实验工坊 | 按关键词规则检查材料和步骤，给出 `low` / `medium` / `high` / `block` 等级、看护方式和建议；年龄小会让小件、气球、绳袋等规则更严 |
| `lab_create_experiment` | 实验工坊 | 生成 `kids-lab/<slug>/` 下的 `index.html`、`experiment.md`、`lab.json`。`block` 级直接拒绝；`kb_refs`（可以跨库）和 `playground_ids` 必须真实存在。**须经用户确认** |
| `lab_list_experiments` | 实验工坊 | 列出当前工作区已生成的实验页 |
| `lab_save_to_kb` | 实验工坊 | 把一个实验写成 `kb/science/experiments/<方向>/experiment-NNNN-<slug>.md`（下一个空闲编号，`status: draft`，写明来源；science 的引用进 `source_refs`，其他库的进 `related`），**须经用户确认**，不覆盖已有文件 |

实验页是单个离线 HTML：先猜一猜、材料和步骤打卡、计时器、观察记录、揭晓原理、变量与对照、再挑战、安全提醒、继续探索（科学馆和知识库链接），对话和原理可以朗读（浏览器 `speechSynthesis`），进度存在 `localStorage`，猜想、做完全部步骤、写下观察各得一颗星，也能打印。

方法写在 skill 里，由 DSH 的 `skill` 工具按需加载：本包的 `kids-lab-experiment`（从问题到实验页的步骤）和 `kids-lab-web-curation`（上网找实验时优先的可信来源、怎么评估、怎么改写和注明出处），加上知识库的 `kb-science`、`kb-wonder`、`wonder-answer`、`wonder-age-stages`。

`cordis.patch.yml` 在宿主上插入「实验室配置」行 `kids-lab-settings`（`playgroundRoot`、`playgroundUrl`），并插入 preset `kidslab`（显示名「实验模式」）。安装脚本会把 `playgroundRoot` 写进 Profile 自己的 patch 层；没配置时也会读环境变量 `SCI_PLAYGROUND_ROOT`。知识库和检索打分来自宿主服务 `kidsKb`（kb 包的 `kids-kb` 行），所以这个包要和 `dsh-kids-kb` 一起装。

科学馆只读 sci-playground 的 `src/catalog/*.ts` 和各游戏的 `meta`，按字面量解析，不执行它的代码；文件变了会自动重建索引。

测试：`node --test tests/*.test.js`（不需要 `npm install`；测试从旁边的 `../dsh-kids-kb` 引入知识库服务）。设置 `KIDS_LAB_DSH_PACKAGE` 为已安装的 `@deepseek-ai/dsh` 包目录，会额外在真实 cordis 运行时里加载并校验工具参数。
