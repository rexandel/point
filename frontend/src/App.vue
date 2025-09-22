<template>
  <div class="app">
    <header class="app__header">
      <NavBar />
    </header>
    <div v-if="!isLogin" class="layout">
      <SideBar />
      <main class="content card">
        <RouterView />
      </main>
    </div>
    <div v-else class="login-layout">
      <main class="login-content card">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';

const route = useRoute();
const isLogin = computed(() => route.name === 'login');
</script>

<style scoped>
.app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.app__header {
  padding: 24px 16px;
}

.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 16px;
  padding: 24px 16px;
}

.content { 
  min-height: 60vh; 
  width: 100%;
  max-width: 1320px; 
  justify-self: start; 
}

.login-layout {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 24px 16px;
}

.login-content { 
  width: 100%; 
  max-width: 480px; 
}
</style>
