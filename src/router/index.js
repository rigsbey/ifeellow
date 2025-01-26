import { createRouter, createWebHistory } from 'vue-router';
import DiaryPage from '../views/DiaryPage.vue';
import TipsPage from '../views/TipsPage.vue';
import SettingsPage from '../views/SettingsPage.vue';
import DiagnosticsPage from '../views/DiagnosticsPage.vue';
import ExercisesPage from '../views/ExercisesPage.vue';
import HotlinePage from '../views/HotlinePage.vue';
import HomePage from '@/views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/diary',
    name: 'Diary',
    component: DiaryPage
  },
  {
    path: '/tips',
    name: 'Tips',
    component: TipsPage
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage
  },
  {
    path: '/diagnostics',
    name: 'Diagnostics',
    component: DiagnosticsPage
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: ExercisesPage
  },
  {
    path: '/hotline',
    name: 'Hotline',
    component: HotlinePage
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory('/ifeellow/'),
  routes
});

// Проверка первого посещения
router.beforeEach((to, from, next) => {
  console.log('Route change:', to.path); // Добавьте для отладки
  const visitedBefore = localStorage.getItem('visitedBefore');
  if (to.meta.skipIfVisited && visitedBefore === 'true') {
    next('/home');
  } else {
    next();
  }
});

export default router;