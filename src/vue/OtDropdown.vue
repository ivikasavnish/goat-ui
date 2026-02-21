<!--
  oat - Vue Dropdown Component
  Renders the ot-dropdown web component structure.
  Derived from the ot-dropdown custom element (src/js/dropdown.js).

  Usage:
    <OtDropdown label="Options">
      <button role="menuitem">Profile</button>
      <button role="menuitem">Settings</button>
    </OtDropdown>
-->

<template>
  <ot-dropdown>
    <button :popovertarget="menuId">{{ label }}</button>
    <menu popover :id="menuId">
      <slot />
    </menu>
  </ot-dropdown>
</template>

<script setup>
import { useOtBase } from './base.js';

const props = defineProps({
  label: { type: String, required: true },
  id: { type: String, default: null }
});

const { uid } = useOtBase();
const menuId = props.id || `ot-menu-${uid()}`;
</script>
