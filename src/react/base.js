// oat - React Base Utilities
// Mirrors the OtBase web component class (src/js/base.js) for React components.
// Provides shared utilities so React components can derive from the same base.

import { useCallback, useEffect } from 'react';

let _counter = 0;

/**
 * useOtBase - Base hook for oat React components.
 * Mirrors OtBase: uid generation.
 */
export function useOtBase() {
  // Generate a unique ID string (mirrors OtBase.uid()).
  const uid = useCallback(() => `ot-${++_counter}`, []);
  return { uid };
}

/**
 * useOtEvent - Attach a custom event listener to a ref element and clean up.
 * Mirrors the cleanup pattern in OtBase.cleanup().
 * Usage: useOtEvent(ref, 'ot-tab-change', handler)
 */
export function useOtEvent(ref, eventName, handler) {
  useEffect(() => {
    if (!handler || !ref.current) return;
    const el = ref.current;
    el.addEventListener(eventName, handler);
    return () => el.removeEventListener(eventName, handler);
  }, [ref, eventName, handler]);
}
