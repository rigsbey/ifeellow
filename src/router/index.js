import { createRouter, createWebHistory } from 'vue-router';
import DiaryPage from '../views/DiaryPage.vue';
import TipsPage from '../views/TipsPage.vue';
import SettingsPage from '../views/SettingsPage.vue';
import DiagnosticsPage from '../views/DiagnosticsPage.vue';
import ExercisesPage from '../views/ExercisesPage.vue';
import HotlinePage from '../views/HotlinePage.vue';
import HomePage from '@/views/HomePage.vue';
import GroundingTechniquesArticle from '@/views/articles/GroundingTechniquesArticle.vue'
import PanicAttacksArticle from '@/views/articles/PanicAttacksArticle.vue'
import BreathingExercisesArticle from '@/views/articles/BreathingExercisesArticle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Главная | ifeellow',
      description: 'Получите мгновенную психологическую поддержку онлайн'
    }
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
    component: ExercisesPage,
    meta: {
      title: 'Упражнения | ifeellow',
      description: 'Дыхательные практики и техники заземления для снятия стресса'
    }
  },
  {
    path: '/hotline',
    name: 'Hotline',
    component: HotlinePage
  },
  {
    path: '/articles/grounding-techniques',
    name: 'GroundingTechniques',
    component: GroundingTechniquesArticle,
    meta: {
      title: 'Grounding Techniques for Anxiety: Evidence-Based Methods | ifeellow',
      description: 'Learn scientifically proven grounding techniques for quick anxiety relief. Research-backed exercises and expert recommendations for managing anxiety effectively.',
      keywords: 'grounding techniques, anxiety management, 5-4-3-2-1 method, anxiety relief, anxiety research'
    }
  },
  {
    path: '/articles/understanding-panic-attacks',
    name: 'PanicAttacks',
    component: PanicAttacksArticle,
    meta: {
      title: 'Understanding Panic Attacks: Complete Guide to Symptoms & Treatment | ifeellow',
      description: 'Comprehensive guide to panic attacks: causes, symptoms, treatment methods, and scientific research. Practical advice for managing panic attacks.',
      keywords: 'panic attacks, panic attack symptoms, panic attack treatment, anxiety disorder'
    }
  },
  {
    path: '/articles/breathing-exercises',
    name: 'BreathingExercises',
    component: BreathingExercisesArticle,
    meta: {
      title: 'Breathing Exercises for Stress Relief: Scientific Approach | ifeellow',
      description: 'Effective breathing techniques for quick stress and anxiety relief. Scientific research and proven methods for stress management.',
      keywords: 'breathing exercises, stress management, breathing techniques, anxiety reduction'
    }
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
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next();
  }
});

export default router;