import { SETTINGS_SERVICE, normalizeSettings } from './shared.js';

export const name = 'kids-lab-settings';

// Host entry, mounted outside the 实验模式 preset so every session reads the same paths.
// The profile patch layer (written by dsh/scripts/install-kidslab) fills playgroundRoot. The knowledge base is
// configured on the kids-kb row of @kids-ai-lab/dsh-kids-kb.
// apply returns nothing: cordis would treat a returned value as an effect.
export function apply(ctx, config = {}) {
  const settings = normalizeSettings(config);
  ctx.provide(SETTINGS_SERVICE, settings);
}
