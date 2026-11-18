// Plain functions for scripts and other packages (no DSH needed): `@kids-ai-lab/dsh-kids-kb/lib`.
export { createKnowledgeIndex, loadLibraries, loadSchema, nextId, ageSpan } from './index.js';
export { checkKnowledge } from './check.js';
export { parseFrontmatter } from './frontmatter.js';
export { normalize, queryTerms, scoreFields, snippet } from './search.js';
export { createKbService, kbServiceOf } from './service.js';
export { loadLibrarySkills, MAINTENANCE_SKILLS } from './skills.js';
export { KB_SERVICE, kbRootOf } from './shared.js';
