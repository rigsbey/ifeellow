<template>
  <div class="content-container">
    <div class="content-card">
      <h1 class="main-title">We're here to help you through difficult times</h1>
      <p class="description">
        Our platform provides immediate psychological support and practical tools to help you cope with stress and anxiety.
      </p>

      <div class="onboarding-actions">
        <el-button type="primary" class="start-button" @click="startApp">
          Start
        </el-button>
        <el-button text @click="skipOnboarding" class="skip-button">
          Skip
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'OnboardingPage',
  
  setup() {
    const router = useRouter()
    const store = useStore()

    const startApp = () => {
      store.commit('setVisitedBefore')
      router.push('/home')
    }

    const skipOnboarding = () => {
      store.commit('setVisitedBefore')
      router.push('/home')
    }

    return {
      startApp,
      skipOnboarding
    }
  },
  
  mounted() {
    localStorage.setItem('visitedBefore', 'true')
  }
}
</script>

<style scoped>
.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.content-card {
  max-width: 600px;
  text-align: center;
}

.main-title {
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 700;
  color: #15293E;
  margin-bottom: 24px;
  line-height: 1.2;
}

.description {
  font-family: var(--font-body);
  font-size: 20px;
  color: #696E76;
  margin-bottom: 48px;
  line-height: 1.6;
}

.onboarding-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.start-button {
  width: 200px;
  height: 50px;
  font-size: 18px;
}

.skip-button {
  font-size: 16px;
  color: #696E76;
}

@media (max-width: 768px) {
  .main-title {
    font-size: 36px;
  }
  
  .description {
    font-size: 18px;
  }
  
  .content-card {
    padding: 24px;
  }
}
</style> 