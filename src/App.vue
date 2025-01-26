<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="page-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { useHead } from '@vueuse/head'

export default {
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    useHead({
      title: 'Immediate Help for Stress and Anxiety | Online Support',
      meta: [
        { name: 'description', content: 'Get immediate help for stress and anxiety with our online support. Breathing exercises, grounding techniques, and more.' },
        { name: 'keywords', content: 'stress relief, anxiety help, mental health support, breathing exercises, grounding techniques' },
        { name: 'author', content: 'Your Name' }
      ]
    })
  }
}
</script>

<style>
/* Добавляем глобальные стили для шрифтов */
:root {
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Lora', serif;
}

#app {
  min-height: 100vh;
  background: #FAFAFD;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}

body {
  font-family: var(--font-body);
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

/* Общие стили для всех страниц */
.content-container {
  padding: 30px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.content-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 700;
  color: #15293E;
  margin-bottom: 16px;
}

.description {
  font-family: var(--font-body);
  font-size: 18px;
  color: #696E76;
  margin-bottom: 32px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .content-container {
    padding: 20px 16px;
  }
  
  .content-card {
    padding: 24px;
  }
  
  .section-title {
    font-size: 28px;
  }
}
</style>