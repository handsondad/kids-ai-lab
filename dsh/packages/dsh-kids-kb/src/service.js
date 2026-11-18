import { createKnowledgeIndex } from './index.js';
import { normalize, queryTerms, scoreFields, snippet } from './search.js';
import { KB_SERVICE, NOT_CONFIGURED, existingDirectory, kbRootOf } from './shared.js';

/**
 * The knowledge base as one shared object: the host row provides it, the tool plugins of every mode read it, and
 * other packages (the 实验模式 workshop) use it to resolve card refs and to rank their own catalogs the same way.
 */
export function createKbService(config = {}) {
  const kbRoot = kbRootOf(config);
  let index = null;
  return {
    kbRoot,
    configured: () => Boolean(kbRoot),
    root: () => existingDirectory(kbRoot, '知识库目录', NOT_CONFIGURED),
    index() {
      const root = this.root();
      if (!index || index.root !== root) index = createKnowledgeIndex(root);
      return index;
    },
    text: { normalize, queryTerms, scoreFields, snippet },
  };
}

/** A row's own kbRoot wins, then the host 知识库配置 service, then the environment. */
export function kbServiceOf(ctx, config = {}) {
  if (typeof config.kbRoot === 'string' && config.kbRoot.trim()) return createKbService(config);
  if (typeof ctx?.get === 'function') {
    try {
      const shared = ctx.get(KB_SERVICE);
      if (shared?.index) return shared;
    } catch { /* not provided: fall back to the environment */ }
  }
  return createKbService({});
}
