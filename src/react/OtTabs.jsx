/**
 * oat - React Tabs Component
 * Renders the ot-tabs web component structure.
 * Derived from the ot-tabs custom element (src/js/tabs.js).
 *
 * Usage:
 *   <OtTabs tabs={['Account', 'Password']} onChange={i => console.log(i)}>
 *     <div>Account content</div>
 *     <div>Password content</div>
 *   </OtTabs>
 */

import { Children, useRef, useCallback } from 'react';
import { useOtEvent } from './base.js';

export function OtTabs({ tabs = [], defaultIndex = 0, onChange, className, children }) {
  const ref = useRef(null);

  const handleChange = useCallback(
    (e) => onChange && onChange(e.detail.index, e.detail.tab),
    [onChange]
  );

  useOtEvent(ref, 'ot-tab-change', onChange ? handleChange : null);

  const panels = Children.toArray(children);

  return (
    <ot-tabs ref={ref} class={className}>
      <div role="tablist">
        {tabs.map((label, i) => (
          <button key={i} role="tab" aria-selected={i === defaultIndex ? 'true' : 'false'}>
            {label}
          </button>
        ))}
      </div>
      {panels.map((panel, i) => (
        <div key={i} role="tabpanel">{panel}</div>
      ))}
    </ot-tabs>
  );
}
