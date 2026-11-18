import { createKbService } from './service.js';
import { KB_SERVICE } from './shared.js';

// 知识库配置: the host row. It provides the shared knowledge-base service, so every mode (实验模式, 知识库模式, and
// any mode added later) reads the same kb/ directory.
export const name = 'kids-kb';

export function apply(ctx, config = {}) {
  ctx.provide(KB_SERVICE, createKbService(config));
}
