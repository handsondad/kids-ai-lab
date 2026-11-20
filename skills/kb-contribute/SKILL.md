---
name: kb-contribute
description: >-
  在 kids-ai-lab 仓库的 kb/ 六大知识库（science、games、psychology、language、ai、wonder）中检索、新建、关联或校验 Markdown 知识卡片，或为库扩展文档类型与规则。凡非 DSH 环境的编码 Agent（Copilot CLI、Claude Code、Codex、Cursor）在本仓库扩充或维护 kb/ 内容时调用。
---

# kids-ai-lab 知识库扩充指南 (`kb-contribute`)

本技能面向在 `kids-ai-lab` 仓库根目录直接工作的 AI Agent（如 Copilot CLI / Codex / Claude Code）。若在 DeepSeek Harness（DSH）插件环境下运行，请优先使用内置 `kb_*` 工具及 `dsh-kids-kb` 注册的同名 skill。

## 1. 先读规则，再查重

1. **共通规范**：先读 `kb/README.md` 与 `kb/schema.json`。
2. **各库专属规则**：动手前必须阅读目标库的 `kb/<库id>/AGENTS.md`（若存在 `kb/<库id>/skills/*.md` 也一并阅读）：
   - `science`（趣味科学实验库）
   - `games`（亲子游戏知识库）
   - `psychology`（儿童心理学知识库）
   - `language`（语言发展知识库）
   - `ai`（趣味AI知识库）
   - `wonder`（孩子的奇妙视界）
3. **先检索防重**：用 `grep` / `glob` 在目标 `kb/<库id>/` 搜索关键词和相近主题；若已有同类单元，直接修订原卡片而不是重复新建。

## 2. 取下一个编号与模板（脚手架）

不要手数编号，也不要手猜目录占位符。直接运行 CLI 工具查看库结构、模板与下一个可用编号：

```bash
npm run kb:schema                                   # 列出 6 个库和文档类型
npm run kb:schema -- <library>                      # 查看该库的 doc_type 列表
npm run kb:schema -- <library> <doc_type>           # 查看模板、必填字段与下一个 id
npm run kb:schema -- <library> <doc_type> <slug> [--subfolder <...>] --write
```

- `slug` 与目录名仅限小写 ASCII 字母、数字和连字符（文件夹占位符用下划线如 `age_24_36m`）。
- 含占位符的目录（如 `games/<age_stage>/<skill>`）需传 `--subfolder age_24_36m/language`。

## 3. 编写卡片硬性约定

1. **状态锁定 `status: draft`**：AI Agent 新建的卡片一律保持 `draft`，禁止擅自写成 `reviewed` 或 `published`。
2. **禁止编造来源**：严禁伪造书名、页码、URL、研究结论或实验结果。无外部来源时使用 `source_kind: manual_curation`；引用网页需附真实可访问 URL 与读取日期，用自己的话改写，不整段照搬原文。
3. **安全与隐私**：涉及火、高温、刀具、化学品、电池、小零件等危险操作时，明确标出哪一步必须由大人完成；严禁记录真实孩子的姓名、学校、照片等个人信息。
4. **引用与跨库关联**：
   - 同库引用使用 `source_refs` / `source_book` / `derived_cards` / `included_cards` 等字段（写卡片 `id`）。
   - 跨库关联只写在 `related:` 列表，格式为 `库id/卡片id`（例如 `psychology/support-0012`）；反向链接由索引自动计算，不要手写。
5. **非卡片文件放 `_` 目录**：工作记录、草稿报告放进 `_reports/` 等以 `_` 开头的目录，不得混入卡片目录。

## 4. 校验与测试门禁

每次新增或修改卡片后，必须运行以下命令确认 **0 错误**：

```bash
npm run kb:check -- --library <library> --warnings
npm run kb:check
npm test
```

若修改了 `dsh/packages/` 下的插件或工具代码，还需确保 `npm test` 全过，并提醒用户在本地执行 `npm run dsh:install` 同步到 DSH Profile。
