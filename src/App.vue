<template>
  <div id="app">
    <nav-bar v-if="!isHomePage"></nav-bar>
    <div class="page-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

export default {
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    const route = useRoute()
    const isHomePage = computed(() => route.path === '/')
    
    useHead({
      title: 'Immediate Help for Stress and Anxiety | Online Support',
      meta: [
        { name: 'description', content: 'Get immediate help for stress and anxiety with our online support. Breathing exercises, grounding techniques, and more.' },
        { name: 'keywords', content: 'stress relief, anxiety help, mental health support, breathing exercises, grounding techniques' },
        { name: 'author', content: 'Your Name' }
      ]
    })

    return {
      isHomePage
    }
  }
}
</script>

<style>
@import './styles/layout.css';

#app {
  min-height: 100vh;
  background: #FAFAFD;
}

.page-container {
  min-height: calc(100vh - 60px); /* Высота минус высота навбара */
  padding-top: 20px;
  box-sizing: border-box;
}

/* Медиа-запросы для адаптивности */
@media (max-width: 768px) {
  .main-content {
    padding: 20px 16px;
  }

  .content {
    padding: 24px;
  }
}
</style>