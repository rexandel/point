import { ref, watchEffect } from 'vue';
import { defineStore } from 'pinia';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'point_theme';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>('light');

  const load = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (saved === 'light' || saved === 'dark') theme.value = saved;
      else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) theme.value = 'dark';
    } catch {}
  };

  const apply = () => {
    const root = document.documentElement;
    if (theme.value === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  };

  load();
  apply();

  watchEffect(apply);

  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(STORAGE_KEY, theme.value); } catch {}
  };

  return { theme, toggle };
});