# DSH 接入：知识库模式和实验模式

DSH 是 DeepSeek Harness（0.2.x，基于 cordis 插件系统）。本仓库给它加两个插件包和两个模式，所有模式读同一个 `kb/` 知识库。

| 位置 | 说明 |
| --- | --- |
| `packages/dsh-kids-kb/` | 知识库插件。宿主行 `kids-kb`（「知识库配置」，只有 `kbRoot`）提供共享服务 `kidsKb`；工具行 `@kids-ai-lab/dsh-kids-kb/tools` 提供 `kb_libraries` `kb_search` `kb_read` `kb_links`，`maintain: true` 时再加 `kb_schema` `kb_check`；把每个库的 `AGENTS.md` 和 `skills/*.md` 注册成 skill。包内 `cordis.patch.yml` 声明「知识库模式」（preset `kidskb`）。另有校验 CLI `bin/kb-check.js` |
| `packages/dsh-kids-lab/` | 实验模式插件。宿主行 `kids-lab-settings`（sci-playground 目录和科学馆在线地址）；科学馆 `playground_*` 和实验工坊 `lab_*` 两个工具插件；「实验模式」（preset `kidslab`）挂上 kb 包的工具行（只读，只注册 science、wonder 两个库的 skill） |
| `scripts/install-kidslab.ps1` / `.sh` | 开发安装：先装 kb 包、再装 lab 包（`file:` 依赖），写入路径配置，并检查组合后的配置里四行（两个宿主行、两个 preset）都在 |
| `scripts/profile-config.js` | 安装脚本用来改 Profile 自己的 `cordis.patch.yml`：只改一段带标记的区块，重跑会替换它，区块外的内容保持不变 |

两个包在运行时只通过宿主服务 `kidsKb` 共享代码（知识库索引和检索打分），不互相 import：DSH 把每个包作为独立副本装进 Profile。

## 两个模式

**知识库模式**：会话目录选本仓库根目录。Agent 先 `kb_search` / `kb_read` 查重，再 `kb_schema` 拿模板、下一个编号和文件路径，用 DSH 的文件工具写卡片，最后 `kb_check` 校验。skill `kb-contribute`（写一张卡）、`kb-ingest-source`（把一本书、一篇文章拆进知识库）、`kb-link`（跨库关联）和每个库的 `kb-<库id>` 给出具体步骤。新卡一律 `status: draft`。`kb_schema` 发现会话目录不包含知识库时会提醒换目录。

**实验模式**：家长用自然语言描述孩子的问题和家里有的材料，Agent 先查知识库和 sci-playground 科学馆，再按需上网找优质实验，做安全检查，最后生成一个孩子能直接动手的互动实验页。实验页写在会话工作区的 `kids-lab/<slug>/` 下，不会写进仓库。只有家长明确要求、并在 DSH 里确认后，`lab_save_to_kb` 才会把实验整理成 `status: draft` 的卡片写进 `kb/science/experiments/`。安全检查是关键词规则，会拒绝 `block` 级别的方案，但不能代替大人现场判断，生成的页面也这样写明。

## 安装

从仓库根目录运行：

```powershell
.\dsh\scripts\install-kidslab.ps1                              # 新建 kids-ai-lab Profile，并把实验模式设为默认
.\dsh\scripts\install-kidslab.ps1 -ModelsFrom my-existing-profile   # 同上，并从已有 Profile 复制模型配置
.\dsh\scripts\install-kidslab.ps1 -ProfileName my-existing-profile  # 给已有 Profile 加上两个模式
```

POSIX：`bash dsh/scripts/install-kidslab.sh [--profile NAME] [--playground DIR] [--models-from PROFILE]`。sci-playground 默认取仓库旁边的 `../sci-playground`，可用 `-PlaygroundRoot` 指定。

然后重启 DSH Web：`dsh --profile kids-ai-lab --port 3090`，新建会话时选择工作区和模式。pnpm 会把 `file:` 依赖复制一份，所以改了插件代码后要重跑安装脚本再重启。改了 `kb/*/AGENTS.md` 或 `kb/*/skills/*.md` 只需重启（skill 在启动时注册）；改卡片不用重启（索引按文件修改时间增量更新）。重跑安装是安全的：上次写入的默认模式和模型配置会保留。

## 测试

```powershell
npm test          # 仓库根目录：两个包的全部测试
npm run kb:check  # 知识库校验
```

不需要 `npm install`。设置 `KIDS_LAB_DSH_PACKAGE` 指向已安装的 `@deepseek-ai/dsh` 包目录时，会额外在真实的 cordis 运行时里加载插件，并用 DSH 自己的 JSON Schema 检查校验所有工具参数。
