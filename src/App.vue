<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="page-container">
      <router-view></router-view>
    </div>
    <feedback-form></feedback-form>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FeedbackForm from '@/components/FeedbackForm.vue'
import { useHead } from '@vueuse/head'

export default {
  name: 'App',
  components: {
    NavBar,
    FeedbackForm
  },
  setup() {
    useHead({
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'Психологическая поддержка онлайн | ifeellow',
      meta: [
        { 
          name: 'description', 
          content: 'Получите мгновенную психологическую поддержку онлайн. Дыхательные упражнения, техники заземления и профессиональная помощь.' 
        },
        { 
          name: 'keywords', 
          content: 'психологическая помощь, снятие стресса, тревожность, дыхательные упражнения, онлайн поддержка' 
        },
        { name: 'author', content: 'ifeellow' },
        { name: 'geo.region', content: 'RU' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Психологическая поддержка онлайн | ifeellow' },
        { property: 'og:description', content: 'Получите мгновенную психологическую поддержку онлайн' },
        { property: 'og:image', content: '/og-image.jpg' }
      ],
      link: [
        { rel: 'canonical', href: 'https://yourwebsite.com' }
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