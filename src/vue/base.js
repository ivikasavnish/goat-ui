// oat - Vue Base Utilities
// Mirrors the OtBase web component class (src/js/base.js) for Vue components.
// Provides shared utilities so Vue components can derive from the same base.

let _counter = 0;

/**
 * useOtBase - Base composable for oat Vue components.
 * Mirrors OtBase: uid generation.
 */
export function useOtBase() {
  // Generate a unique ID string (mirrors OtBase.uid()).
  const uid = () => `ot-${++_counter}`;

  return { uid };
}
