import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/profile', name: 'profile', component: () => import('@/views/ProfileView.vue') },
  { path: '/', name: 'feed', component: () => import('@/views/FeedView.vue') },
  { path: '/friends', name: 'friends', component: () => import('@/views/FriendsView.vue') },
  { path: '/notifications', name: 'notifications', component: () => import('@/views/NotificationsView.vue') },
  { path: '/login', name: 'login', component: () => import('@/views/LoginView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
