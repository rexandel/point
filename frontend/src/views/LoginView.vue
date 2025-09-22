<template>
  <section class="login card">
    <h2>Войти</h2>
    <form class="form" @submit.prevent>
      <div class="input-group">
        <input 
          type="email" 
          required 
          v-model="email"
          placeholder=" "
        />
        <label class="floating-label">Электронная почта</label>
      </div>
      <div class="input-group">
        <input 
          type="password" 
          required 
          v-model="password"
          placeholder=" "
        />
        <label class="floating-label">Пароль</label>
      </div>
      <button type="submit" class="login-btn">
        <span>Войти</span>
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<style scoped>
.form {
  display: grid;
  gap: 32px;
}

.input-group {
  position: relative;
  margin-top: 30px;
}

input {
  display: block;
  width: 100%;
  background: var(--input-bg);
  color: var(--input-text);
  border: 2px solid var(--input-border);
  border-radius: 12px;
  padding: 20px 18px 12px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
}

input:focus {
  border-color: var(--primary);
}

.floating-label {
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  color: var(--text-secondary);
  font-size: 16px;
  pointer-events: none;
  transition: all 0.3s ease;
  background: var(--input-bg);
  padding: 0 8px;
  margin: 0;
  z-index: 2;
  border-radius: 6px;
  max-width: calc(100% - 36px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

input:focus + .floating-label,
input:not(:placeholder-shown) + .floating-label {
  top: 0;
  font-size: 13px;
  color: var(--primary);
  font-weight: 600;
  transform: translateY(-50%);
}

.login-btn {
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
}

.login-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, #60a5fa 0%, #93c5fd 50%, #60a5fa 100%);
  background-size: 200% 100%;
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  animation: shimmer 1.6s linear infinite;
}

.login-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(96, 165, 250, 0.3);
}

.login-btn:hover::before {
  opacity: 1;
}

.login-btn span {
  position: relative;
  z-index: 1;
  color: white;
}

@keyframes shimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

.input-group {
  animation: slideUp 0.5s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

.input-group:nth-child(1) { 
  animation-delay: 0.1s; 
}

.input-group:nth-child(2) { 
  animation-delay: 0.2s; 
}

.login-btn { 
  animation: slideUp 0.5s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

input {
  caret-color: var(--primary);
}
</style>
