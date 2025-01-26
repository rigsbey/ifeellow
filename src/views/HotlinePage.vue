<template>
  <div class="content-container">
    <div class="content-card">
      <h2 class="section-title">Emergency Support</h2>
      <p class="description">
        If you need immediate support, our specialists are available 24/7
        to help you through any crisis.
      </p>

      <div class="hotline-content">
        <el-alert
          type="warning"
          :closable="false"
          show-icon
        >
          <p>
            If you are in a critical situation or feel that you might
            harm yourself or others, immediately call emergency services.
          </p>
        </el-alert>

        <div class="hotlines-grid">
          <el-card v-for="hotline in hotlines" :key="hotline.id" class="hotline-card">
            <h3>{{ hotline.name }}</h3>
            <p class="hotline-description">{{ hotline.description }}</p>
            
            <div class="hotline-number">
              <span class="number">{{ hotline.number }}</span>
              <div class="number-actions">
                <el-button 
                  type="primary" 
                  circle
                  @click="copyNumber(hotline.number)"
                >
                  <el-icon class="copy-icon"><CopyDocument /></el-icon>
                </el-button>
                <el-button 
                  type="success" 
                  circle
                  @click="callNumber(hotline.number)"
                >
                  <el-icon class="phone-icon"><Phone /></el-icon>
                </el-button>
              </div>
            </div>

            <div class="hotline-info">
              <el-tag v-if="hotline.hours === '24/7'" type="success" class="icon-24-7">24/7</el-tag>
              <el-tag v-else>{{ hotline.hours }}</el-tag>
              <el-tag v-if="hotline.free" type="info">Free</el-tag>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CopyDocument, Phone } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

export default {
  name: 'HotlinePage',
  
  components: {
    CopyDocument,
    Phone
  },

  data() {
    return {
      hotlines: [
        {
          id: 1,
          name: "National Suicide & Crisis Lifeline",
          description: "24/7 support for people experiencing emotional crisis",
          number: "988",
          hours: "24/7",
          free: true
        },
        {
          id: 2,
          name: "Crisis Text Line",
          description: "Text HELLO to 741741 for support",
          number: "741741",
          hours: "24/7",
          free: true
        },
        {
          id: 3,
          name: "National Domestic Violence Hotline",
          description: "Support for those experiencing domestic violence",
          number: "1-800-799-7233",
          hours: "24/7",
          free: true
        },
        // Добавьте другие горячие линии здесь
      ]
    }
  },

  methods: {
    async copyNumber(number) {
      try {
        await navigator.clipboard.writeText(number);
        ElMessage({
          message: 'Number copied to clipboard',
          type: 'success'
        });
      } catch (err) {
        ElMessage.error('Failed to copy number');
      }
    },

    callNumber(number) {
      window.location.href = `tel:${number.replace(/[-]/g, '')}`;
    }
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
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #15293E;
  margin-bottom: 16px;
}

.hotline-content {
  margin-top: 40px;
}

.hotlines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.hotline-card {
  background: white;
  border-radius: 10px;
}

.hotline-description {
  color: #696E76;
  margin: 15px 0;
}

.hotline-number {
  background: #F8F9FC;
  border-radius: 8px;
  padding: 15px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.number {
  font-size: 20px;
  font-weight: bold;
  color: #2864A4;
}

.number-actions {
  display: flex;
  gap: 10px;
}

.hotline-info {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

:deep(.el-alert) {
  margin-bottom: 30px;
}

:deep(.el-tag) {
  border-radius: 4px;
}

/* Цвета для иконок */
.phone-icon {
  fill: #A8E6CF; /* Светло-зеленый для иконки звонка */
}

.copy-icon {
  fill: #D0F0FD; /* Светло-голубой для иконки копирования */
}

/* Цвета для значков "24/7" и "Free" */
.icon-24-7 {
  background: #F4F9FF; /* Нежный голубой фон */
  color: #4A90E2; /* Синий текст для акцента */
}
</style> 