<template>
  <div class="container">
    <div class="main-content">
      <div class="content">
        <h2 class="section-title">Tips</h2>
        <p class="description">
          Here you'll find useful tips and recommendations that will help you
          improve your emotional state and cope with stress.
        </p>

        <el-row :gutter="30">
          <el-col :span="8" v-for="tip in tips" :key="tip.id">
            <el-card class="tip-card" shadow="hover">
              <div class="tip-icon">
                <el-icon><Reading /></el-icon>
              </div>
              <h3 class="tip-title">{{ tip.title }}</h3>
              <p class="tip-description">{{ tip.description }}</p>
              <div class="tip-tags">
                <el-tag 
                  v-for="tag in tip.tags" 
                  :key="tag"
                  size="small"
                  effect="plain"
                >
                  {{ tag }}
                </el-tag>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <h3 class="categories-title">Categories</h3>
        <div class="categories">
          <div class="category-buttons">
            <el-button
              v-for="category in categories"
              :key="category.id"
              :class="{ active: activeCategory === category.id }"
              @click="filterByCategory(category.id)"
              class="category-button"
            >
              {{ category.name }}
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-logo">THNX</div>
      <router-link to="/privacy">Privacy Policy</router-link>
      <router-link to="/terms">Terms of Service</router-link>
      <span>Powered by <span class="open-source">Open Source</span></span>
    </div>
  </div>
</template>

<script>
import { Reading } from '@element-plus/icons-vue'

export default {
  name: 'TipsPage',
  components: {
    Reading
  },
  data() {
    return {
      activeCategory: null,
      categories: [
        { id: 1, name: 'All Tips' },
        { id: 2, name: 'Stress Management' },
        { id: 3, name: 'Meditation' },
        { id: 4, name: 'Healthy Sleep' },
        { id: 5, name: 'Self-help' }
      ],
      tips: [
        {
          id: 1,
          title: 'Breathing Exercises',
          description: 'Simple breathing techniques that will help quickly relieve stress and anxiety in any situation.',
          tags: ['Stress', 'Meditation'],
          categoryId: 2
        },
        {
          id: 2,
          title: 'Healthy Sleep',
          description: 'Recommendations for improving sleep quality and creating a proper daily routine.',
          tags: ['Sleep', 'Health'],
          categoryId: 4
        },
        {
          id: 3,
          title: 'Self-help Techniques',
          description: 'Effective self-help methods for anxiety states.',
          tags: ['Self-help', 'Anxiety'],
          categoryId: 5
        }
      ]
    };
  },
  methods: {
    filterByCategory(categoryId) {
      this.activeCategory = categoryId;
      // Здесь можно добавить логику фильтрации советов по категориям
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  background: #FAFAFD;
}

.main-content {
  padding: 0 130px;
  margin-bottom: 100px;
}

.content {
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  padding: 40px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #15293E;
  margin-bottom: 16px;
}

.description {
  font-size: 16px;
  color: #696E76;
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 800px;
}

.tip-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.tip-card:hover {
  transform: translateY(-5px);
}

.tip-icon {
  color: #2864A4;
  font-size: 24px;
  margin-bottom: 16px;
}

.tip-title {
  font-size: 20px;
  font-weight: 600;
  color: #15293E;
  margin-bottom: 12px;
}

.tip-description {
  color: #696E76;
  line-height: 1.6;
  margin-bottom: 16px;
}

.tip-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.categories-title {
  font-size: 24px;
  font-weight: 600;
  color: #15293E;
  margin: 40px 0 20px;
}

.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.category-button {
  min-width: 120px;
}

.category-button.active {
  background-color: #2864A4;
  color: white;
  border-color: #2864A4;
}

.footer {
  margin-top: 40px;
  background: #F0F1F6;
  padding: 25px 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 185px;
}

.footer-logo {
  background: #E31235;
  width: 50px;
  height: 38px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.footer a {
  color: inherit;
  text-decoration: none;
}

.footer a:hover {
  color: #2864A4;
}

.open-source {
  color: #2864A4;
}

/* Стили для Element Plus компонентов */
:deep(.el-card) {
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
}

:deep(.el-tag) {
  background: #F8F9FC;
  border-color: #F8F9FC;
  color: #696E76;
}

:deep(.el-row) {
  margin-bottom: 30px;
}
</style> 