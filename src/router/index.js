import { createRouter, createWebHistory } from 'vue-router';
import OnboardingPage from '../views/OnboardingPage.vue';
import DiaryPage from '../views/DiaryPage.vue';
import TipsPage from '../views/TipsPage.vue';
import SettingsPage from '../views/SettingsPage.vue';
import DiagnosticsPage from '../views/DiagnosticsPage.vue';
import ExercisesPage from '../views/ExercisesPage.vue';
import HotlinePage from '../views/HotlinePage.vue';

const routes = [
  {
    path: '/',
    name: 'Onboarding',
    component: OnboardingPage,
    meta: { skipIfVisited: true }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomePage.vue')
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/ifeellow/' : '/'),
  routes
});

// Проверка первого посещения
router.beforeEach((to, from, next) => {
  const visitedBefore = localStorage.getItem('visitedBefore');
  if (to.meta.skipIfVisited && visitedBefore === 'true') {
    next('/home');
  } else {
    next();
  }
});

export default router;