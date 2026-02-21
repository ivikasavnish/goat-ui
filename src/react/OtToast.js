/**
 * oat - React Toast Utility
 * Thin wrapper around window.ot.toast (src/js/toast.js).
 * Derived from the oat toast module so API stays in sync.
 *
 * Usage:
 *   import { OtToast } from '@knadh/oat/react';
 *
 *   OtToast.show('Saved!');
 *   OtToast.show('All done', 'Success', { variant: 'success' });
 *   OtToast.showEl(element, { placement: 'bottom-center' });
 *   OtToast.clear();
 */

export const OtToast = {
  // Show a text toast (mirrors ot.toast).
  show(message, title, options = {}) {
    if (typeof window !== 'undefined' && window.ot?.toast) {
      window.ot.toast(message, title, options);
    }
  },

  // Show an element-based toast (mirrors ot.toastEl).
  showEl(el, options = {}) {
    if (typeof window !== 'undefined' && window.ot?.toastEl) {
      window.ot.toastEl(el, options);
    }
  },

  // Clear all toasts (mirrors ot.toast.clear).
  clear(placement) {
    if (typeof window !== 'undefined' && window.ot?.toast?.clear) {
      window.ot.toast.clear(placement);
    }
  }
};
