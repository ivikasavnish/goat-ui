<!--
  oat - Vue Tabs Component
  Renders the ot-tabs web component structure.
  Derived from the ot-tabs custom element (src/js/tabs.js).

  Usage:
    <OtTabs :tabs="['Account', 'Password']" v-model="activeTab">
      <template #tab-0>Account content</template>
      <template #tab-1>Password content</template>
    </OtTabs>
-->

<template>
  <ot-tabs ref="el" @ot-tab-change="onTabChange">
    <div role="tablist">
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        role="tab"
        :aria-selected="String(i === modelValue)"
      >{{ tab }}</button>
    </div>
    <div v-for="(_, i) in tabs" :key="i" role="tabpanel">
      <slot :name="`tab-${i}`" />
    </div>
  </ot-tabs>
</template>

<script setup>
const props = defineProps({
  tabs: { type: Array, default: () => [] },
  modelValue: { type: Number, default: 0 }
});

const emit = defineEmits(['update:modelValue', 'change']);

function onTabChange(e) {
  emit('update:modelValue', e.detail.index);
  emit('change', e.detail.index, e.detail.tab);
}
</script>
