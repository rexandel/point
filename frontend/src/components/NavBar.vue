<template>
  <nav class="navbar card">
    <div class="navbar__left">
      <RouterLink to="/" class="brand" aria-label="Точка">
        <span 
          class="brand__logo" 
          @click.prevent="toggleTheme" 
          :title="theme === 'dark' ? 'Тёмная тема' : 'Светлая тема'" 
        />
        <span class="brand__name">Точка</span>
      </RouterLink>
    </div>
    <div class="navbar__right">
      <RouterLink to="/login">Войти</RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);
const toggleTheme = () => themeStore.toggle();
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  gap: 12px;
}

.navbar__left,
.navbar__right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand {
  font-weight: 700;
  margin-right: 6px;
  display: flex;
  align-items: center;
}

.brand__name { 
  margin-left: 8px; 
  font-size: 24px; 
  letter-spacing: 0.2px; 
}

.brand__name {
  background: linear-gradient(90deg, #60a5fa 0%, #93c5fd 50%, #60a5fa 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer 1.6s linear infinite;
}

.brand__logo { 
  display: inline-block; 
  width: 28px; 
  height: 28px; 
  border-radius: 999px; 
  background: linear-gradient(90deg, #60a5fa 0%, #93c5fd 50%, #60a5fa 100%);
  background-size: 200% 100%;
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--primary) 20%, transparent);
  transition: transform 0.2s ease;
  cursor: pointer;
  position: relative;
  animation: pulse 7s linear infinite; 
  transform: center; 
}

.brand__logo:hover {
  transform: scale(1.1);
}

.brand__logo:active {
  transform: scale(0.95);
}

@keyframes shimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

:global([data-theme="dark"]) :deep(.brand__logo) {
  background: linear-gradient(90deg, var(--primary) 0%, #8ab4ff 50%, var(--primary) 100%);
}

:global([data-theme="dark"]) :deep(.brand__name) {
  background: linear-gradient(90deg, var(--primary) 0%, #8ab4ff 50%, var(--primary) 100%);
}
</style>
