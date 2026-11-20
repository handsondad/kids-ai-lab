# AGENTS.md — 孩子的 AI 实验室

给在这个仓库里开发和扩充内容的 AI Agent（以及人）看。先读完这一页，再动手。

## 仓库是什么

一个给家长和孩子用的知识库，加上把它接进 DeepSeek Harness（DSH）的插件。以后所有能力都基于 DSH 扩展：知识放在 `kb/`，能力做成 DSH 插件和模式。

```
kb/                          知识库：六个库，Markdown 卡片（规范见 kb/README.md）
  README.md  schema.json     共通规范和机器可读的规则
  <库id>/library.json        库的说明和卡片类型
  <库id>/AGENTS.md           库的规则（DSH 里注册成 skill kb-<库id>）
  <库id>/skills/*.md         库的额外 skill
dsh/packages/dsh-kids-kb/    DSH 插件：共享知识库服务 kidsKb、kb_* 工具、库 skill、校验 CLI、「知识库模式」
dsh/packages/dsh-kids-lab/   DSH 插件：「实验模式」（科学馆 playground_*、实验工坊 lab_*）
dsh/scripts/                 把两个插件装进 DSH Profile 的脚本
```

两个 DSH 模式：

- **知识库模式**（preset `kidskb`）：查重、按模板写卡片、跨库关联、校验。工具 `kb_libraries` `kb_search` `kb_read` `kb_links` `kb_schema` `kb_check`，加 DSH 自带的文件、搜索、终端、联网工具；skill `kb-contribute` `kb-ingest-source` `kb-link` 和每个库的 `kb-<库id>`。会话目录选本仓库根目录。
- **实验模式**（preset `kidslab`）：查知识库和 sci-playground 科学馆，设计安全的科学实验，生成互动实验页，必要时写回 `kb/science`。

## 不能破坏的约定

知识库：

- 卡片格式、引用和关联的规则以 `kb/README.md` 为准；每个库的规则以 `kb/<库id>/AGENTS.md` 为准。
- 不伪造来源、页码、研究结论、数据或实验结果。没有真实来源就写 `source_kind: manual_curation`。
- id 是 `<前缀>-<四位编号>[-slug]`，库内唯一，被引用后不再改；新编号用 `kb_schema` 取。文件名以 id 开头，目录名和文件名只用 ASCII。
- 新卡一律 `status: draft`。只有人工核对后才改成 `reviewed` / `published`。
- 跨库关联只写在 `related:`，格式 `库id/卡片id`；反向链接由索引计算，不要手写。
- 不是卡片的文件（工作记录、报告）放进以 `_` 开头的目录，否则校验会报错。

插件：

- 两个包在运行时只通过宿主服务 `kidsKb`（`ctx.get('kidsKb')`）共享代码，不互相 import：DSH 把每个包作为独立副本装进 Profile。`dsh-kids-lab` 的测试可以从 `../../dsh-kids-kb/` 引入，源码不行。
- 工具参数用 DSH 支持的 JSON Schema 子集：不写 `minimum` / `maximum`、不用类型数组；范围在 `execute` 里校验（`integer()`）。
- 工具返回结构化对象，`output.render` 给模型看 Markdown。会写文件的工具先用 `ctx.userQuestions.ask` 让用户在确认卡上确认（见 `approve()`）。
- skill 正文不超过 8192 字符（tool-result pruner 的阈值），否则加载时会被截断。
- 路径配置挂在宿主行上（`kids-kb` 的 `kbRoot`、`kids-lab-settings` 的 `playgroundRoot`），由安装脚本写进 Profile 的 patch 层；不要从包的位置猜路径。
- 面向孩子的内容：科学原理正确，安全风险写清哪一步由大人做，不收集孩子的个人信息。

## 怎么做常见的事

### 加或改卡片

在 DSH 里用知识库模式（会话目录选本仓库），或在非 DSH 编码 Agent 下参照 `skills/kb-contribute/SKILL.md`（镜像于 `.agents/skills/kb-contribute/SKILL.md`）：

1. `kb_search` / `kb_read`（或直接搜索 `kb/<库id>/`）查重；已经有就改那张。
2. `kb_schema`（library、doc_type、slug、subfolder），或终端执行 `npm run kb:schema -- <库id> <doc_type> <slug> [--subfolder <...>] [--write]` 拿模板、下一个 id 和路径。
3. 按模板写，`status: draft`；来源链路和 `related:` 按 `kb/README.md`。
4. `npm run kb:check -- --library <库id> --warnings`（或 `node dsh/packages/dsh-kids-kb/bin/kb-check.js --library <库id> --warnings`），错误修到 0。

### 给一个库加卡片类型

1. 在 `kb/<库id>/library.json` 的 `doc_types` 里加一项：`label`、`id_prefix`、`folder`（可以含 `<占位符>`）、`template`、`answerable`、`required`。
2. 在 `kb/<库id>/_templates/` 放模板。
3. 在 `kb/<库id>/AGENTS.md` 的目录表里加一行，说明什么时候用。
4. 如果它有新的引用字段，加进 `kb/schema.json` 的 `ref_fields`。
5. 跑 `kb-check`。

### 加一个新库

1. 建 `kb/<新id>/`（小写 ASCII），写 `library.json`（`id` 必须和目录名一致）、`AGENTS.md`、`README.md`、`_templates/`。
2. 在 `kb/README.md` 的库表里加一行。
3. 不用改代码：`kb_libraries`、`kb_search` 和 skill `kb-<新id>` 会自动出现（重启 DSH 后）。需要的话在实验模式 preset 的 `skillLibraries` 里加上它。
4. 跑 `kb-check` 和测试。

### 加 skill

- **属于某个库的方法**（怎么回答某类问题、怎么写某类卡）：写 `kb/<库id>/skills/<名字>.md`，frontmatter 有 `name`（小写字母、数字、连字符，全局唯一）、`description`、`when_to_use`。不用改代码，重启 DSH 生效。
- **属于某个模式的流程**（例如实验模式的 `kids-lab-experiment`）：写在那个包的 `src/skills.js`，由插件 `registerSkills` 注册。
- 库的总规则改 `kb/<库id>/AGENTS.md`，它就是 skill `kb-<库id>`。

### 加工具

1. 选包：读写知识库的放 `dsh-kids-kb/src/tools.js`（只在知识库模式需要的放进 `if (maintain)`）；某个模式专属的放那个模式的包。
2. 用 `ctx.tools.register({ name, description, parameters, output, execute })`，参数用 `parameters()`，入口用 `only()` 拒绝多余参数。description 写英文，说明什么时候用、参数含义、没结果时怎么办。
3. 在 preset 的 persona / plan-mode 文本里提到它（`patch.test.js` 会检查提到的工具都存在）。
4. 写测试：普通测试用 `tests/helpers.js` 的 `fakeHost`；`dsh-native.test.js` 用已安装 DSH 的 cordis 和 schema 检查跑一遍，新工具要加进它的工具列表。

### 加一个新模式

1. 简单的模式：在合适的包的 `cordis.patch.yml` 里照 `preset-kidskb` 复制一个 `@deepseek-ai/dsh-agent-preset` 行，换 `id`、`name`、`description`、`order`、persona，挂上 `@kids-ai-lab/dsh-kids-kb/tools`（`maintain`、`skillLibraries` 按需）。
2. 有自己工具的模式：新建 `dsh/packages/dsh-kids-<名字>/`（参照 `dsh-kids-lab`：`package.json` 的 `dsh.bundle.patch`、`exports`、宿主设置行、preset 行、tests）。需要知识库时用 `ctx.get('kidsKb')`。
3. 把新包加进 `dsh/scripts/install-kidslab.ps1` 和 `.sh`（装在 `dsh-kids-kb` 之后），并把它的 preset 行加进脚本最后的检查；有新的宿主行就在 `profile-config.js` 里写它的配置并加进 `OWN_ROWS`。

## 检查

```powershell
npm run kb:check          # 知识库校验，错误必须为 0
npm test                  # 两个包的测试
$env:KIDS_LAB_DSH_PACKAGE = "<全局 node_modules>\@deepseek-ai\dsh"; npm test   # 再加上在真实 DSH 运行时里的挂载测试
```

改了插件代码以后：重新运行 `dsh/scripts/install-kidslab.ps1`（DSH 装的是副本），再重启 DSH Web（`dsh --profile kids-ai-lab --port 3090`）。改了 `AGENTS.md` 或 `skills/*.md` 只需重启 DSH；改卡片不用重启。

## Windows 注意

- 在 Node 里 spawn `git` 会 EPERM：git 命令在 PowerShell 里跑。
- PowerShell 里 `node -e` 带引号容易解析出错：写成临时 `.mjs` 文件再跑。
- `.ps1` 文件保存为 UTF-8 with BOM，否则中文输出会乱码。
