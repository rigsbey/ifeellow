<template>
  <div class="main-content">
    <el-row justify="center" align="middle">
      <el-col :span="16">
        <div class="hero-section">
          <div class="hero-image">
            <img src="/psychological-support.png" alt="Psychological Support" />
          </div>
          <h1 class="main-title">Emergency Psychological Support</h1>
          <p class="description">
            We provide professional psychological support online.
            Our specialists are ready to help you cope with any life situations.
          </p>
          
          <div class="action-buttons">
            <button class="action-button" @click="startDiagnostics">
              I Need Help
            </button>
            
            <button class="action-button" @click="$router.push('/exercises')">
              Relieve Stress
            </button>
            
            <button class="action-button" @click="$router.push('/hotline')">
              I Want to Talk
            </button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  name: 'HomePage',
  methods: {
    startDiagnostics() {
      this.$router.push('/diagnostics')
    }
  },
  setup() {
    // Обновленные мета-теги для главной страницы
    useMeta({
      title: 'How to Calm Anxiety Quickly | Online Stress Relief',
      meta: [
        { name: 'description', content: 'Discover quick and effective techniques to calm anxiety and manage stress. Breathing exercises, grounding techniques, and more.' },
        { name: 'keywords', content: 'calm anxiety, stress relief, breathing exercises, grounding techniques, mental health hotline' }
      ]
    });
  }
}
</script>

<style scoped>
.main-content {
  padding: 30px 100px;
  min-height: calc(100vh - 140px); /* Учитываем высоту header и nav */
}

.hero-section {
  text-align: center;
  padding: 40px 0;
}

.hero-image {
  margin-bottom: 32px;
}

.hero-image img {
  max-width: 200px;
  height: auto;
  margin: 0 auto;
  display: block;
}

.main-title {
  font-size: 48px;
  font-weight: 700;
  color: #15293E;
  margin-bottom: 20px;
  font-family: var(--font-heading); /* Montserrat */
}

.description {
  font-size: 18px;
  color: #696E76;
  max-width: 600px;
  margin: 0 auto 32px;
  line-height: 1.6;
  font-family: var(--font-body); /* Lora */
}

.action-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 24px 0;
}

.action-button {
  background: transparent;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 12px 24px;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button:hover {
  background: #F9FAFB;
  border-color: #D1D5DB;
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
</style>