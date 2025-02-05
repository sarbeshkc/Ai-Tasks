import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GroupView from '../views/GroupView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/group', component: GroupView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;