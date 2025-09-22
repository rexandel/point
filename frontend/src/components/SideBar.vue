<template>
  <aside class="sidebar card">
    <nav class="menu">
      <RouterLink class="menu__item" active-class="is-active" to="/">Лента</RouterLink>
      <RouterLink class="menu__item" active-class="is-active" to="/profile">Профиль</RouterLink>
      <RouterLink class="menu__item" active-class="is-active" to="/friends">Друзья</RouterLink>
      <RouterLink class="menu__item" active-class="is-active" to="/notifications">Уведомления</RouterLink>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.sidebar {
  width: 260px;
  padding: 12px;
  position: sticky;
  top: 16px;
  align-self: start;
}

.menu {
  display: grid;
  gap: 6px;
}

.menu__item {
  display: block;
  padding: 10px 12px;
  border-radius: 10px;
  color: var(--text);
}

.menu__item:hover {
  background: var(--sidebar-hover);
}

.is-active {
  background: var(--sidebar-active);
}

.menu__item.is-active {
  cursor: default;
  pointer-events: none;
}

.menu__item.is-active:hover {
  background: var(--sidebar-active);
}

:global(:root:not([data-theme="dark"]) .sidebar .menu__item) {
  color: #0b1220 !important;
}

:global(:root:not([data-theme="dark"]) .sidebar .menu__item.is-active) {
  color: #ffffff !important;
}
</style>
