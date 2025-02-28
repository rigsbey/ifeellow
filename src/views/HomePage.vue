<template>
  <div class="content-container">
    <div class="content-card">
      <h2 class="section-title">Emergency Psychological Support</h2>
      <p class="description">
        We provide professional psychological support online. 
        Our specialists are ready to help you cope with any life situations.
      </p>

      <div class="action-buttons">
        <el-button class="transparent-button" @click="$router.push('/hotline')">
          I Need Help
        </el-button>
        <el-button class="transparent-button" @click="$router.push('/exercises')">
          Relieve Stress
        </el-button>
        <el-button class="transparent-button" @click="$router.push('/hotline')">
          I Want to Talk
        </el-button>
      </div>
    </div>

    <!-- Обновленная секция со статьями -->
    <div class="content-card articles-section">
      <h2 class="section-title">Featured Articles</h2>
      <div class="articles-list">
        <div v-for="article in articles" :key="article.id" class="article-item">
          <router-link :to="article.url" class="article-link">
            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-summary">{{ article.summary }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
  name: 'HomePage',
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Grounding Techniques: Quick Ways to Calm Anxiety',
          summary: 'Learn effective grounding techniques that can help you regain control during moments of anxiety or panic attacks.',
          image: '/images/articles/grounding-techniques.jpg',
          url: '/articles/grounding-techniques'
        },
        {
          id: 2,
          title: 'Understanding Panic Attacks: A Comprehensive Guide',
          summary: 'Everything you need to know about panic attacks: symptoms, causes, and proven coping strategies.',
          image: '/images/articles/panic-attacks.jpg',
          url: '/articles/understanding-panic-attacks'
        },
        {
          id: 3,
          title: 'Breathing Exercises for Immediate Stress Relief',
          summary: 'Simple yet powerful breathing techniques you can use anywhere to quickly reduce stress and anxiety.',
          image: '/images/articles/breathing-exercises.jpg',
          url: '/articles/breathing-exercises'
        }
      ]
    }
  },
  methods: {
    startDiagnostics() {
      this.$router.push('/diagnostics')
    }
  },
  setup() {
    useHead({
      title: 'How to Calm Anxiety Quickly | Online Stress Relief',
      meta: [
        { name: 'description', content: 'Discover quick and effective techniques to calm anxiety and manage stress. Breathing exercises, grounding techniques, and more.' },
        { name: 'keywords', content: 'calm anxiety, stress relief, breathing exercises, grounding techniques, mental health hotline' }
      ]
    })

    return {}
  }
}
</script>

<style scoped>
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
  text-align: center;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  color: #15293E;
  margin-bottom: 24px;
}

.description {
  font-family: 'Lora', serif;
  font-size: 18px;
  color: #696E76;
  max-width: 600px;
  margin: 0 auto 48px;
  line-height: 1.6;
  text-align: center;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 32px auto;
}

/* Новый стиль для прозрачных кнопок */
.transparent-button {
  width: 145px !important;
  height: 45px !important;
  border: 2px solid #15293E !important;
  border-radius: 10px !important;
  background: transparent !important;
  color: #15293E !important;
  font-family: 'Montserrat', sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  letter-spacing: 0.01em !important;
  padding: 0 !important;
  transition: all 0.3s ease !important;
}

.transparent-button:hover {
  background: rgba(21, 41, 62, 0.05) !important;
  transform: translateY(-2px);
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .transparent-button {
    width: 200px !important;
  }
}

/* Стили для Element Plus компонентов */
:deep(.el-button--primary) {
  background-color: #2864A4;
  border-color: #2864A4;
  padding: 12px 40px;
  font-size: 16px;
  height: auto;
  border-radius: 10px;
}

:deep(.el-button--primary:hover) {
  background-color: #1e4f8a;
  border-color: #1e4f8a;
}

:deep(.el-button--danger) {
  background-color: #E31235;
  border-color: #E31235;
}

:deep(.el-button--danger:hover) {
  background-color: #c01030;
  border-color: #c01030;
}

:deep(.el-button--success) {
  background-color: #67C23A;
  border-color: #67C23A;
}

:deep(.el-button--success:hover) {
  background-color: #529b2e;
  border-color: #529b2e;
}

:deep(.el-card) {
  border: none;
  transition: transform 0.3s ease;
}

:deep(.el-card:hover) {
  transform: translateY(-5px);
}

:deep(.el-card__body) {
  padding: 0;
}

.articles-section {
  margin-top: 40px;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.article-item {
  border-bottom: 1px solid #E5E7EB;
  padding-bottom: 24px;
}

.article-item:last-child {
  border-bottom: none;
}

.article-link {
  text-decoration: none;
  display: block;
  transition: transform 0.2s ease;
}

.article-link:hover {
  transform: translateX(8px);
}

.article-title {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 600;
  color: #15293E;
  margin-bottom: 12px;
}

.article-summary {
  font-size: 16px;
  color: #696E76;
  line-height: 1.6;
}

/* Удаляем неиспользуемые стили */
.articles-grid,
.article-card,
.article-image,
.read-more-btn {
  display: none;
}

@media (max-width: 768px) {
  .article-title {
    font-size: 20px;
  }
}
</style>