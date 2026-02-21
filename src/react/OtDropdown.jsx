/**
 * oat - React Dropdown Component
 * Renders the ot-dropdown web component structure.
 * Derived from the ot-dropdown custom element (src/js/dropdown.js).
 *
 * Usage:
 *   <OtDropdown label="Options">
 *     <button role="menuitem">Profile</button>
 *     <button role="menuitem">Settings</button>
 *   </OtDropdown>
 *
 *   // Custom trigger via render prop:
 *   <OtDropdown trigger={id => <button popovertarget={id} class="outline">Open ▾</button>}>
 *     <button role="menuitem">Item</button>
 *   </OtDropdown>
 */

import { useRef } from 'react';
import { useOtBase } from './base.js';

export function OtDropdown({ label, trigger, children, className, buttonClassName }) {
  const { uid } = useOtBase();
  const menuId = useRef(`ot-menu-${uid()}`).current;

  const triggerEl = typeof trigger === 'function'
    ? trigger(menuId)
    : <button popovertarget={menuId} className={buttonClassName}>{label}</button>;

  return (
    <ot-dropdown class={className}>
      {triggerEl}
      <menu popover="auto" id={menuId}>
        {children}
      </menu>
    </ot-dropdown>
  );
}
