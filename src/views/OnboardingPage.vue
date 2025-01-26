<template>
  <div class="main-content">
    <div class="content onboarding-content">
      <h1 class="main-title">We're here to help you through difficult times</h1>
      
      <div class="settings-section">
        <h3 class="subsection-title">Application Settings</h3>
        
        <div class="settings-group">
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">Email notifications</span>
              <span class="setting-description">Receive reminders and tips via email</span>
            </div>
            <el-switch
              v-model="emailNotifications"
              @change="updateNotifications('email')"
            />
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">Browser notifications</span>
              <span class="setting-description">Receive reminders in browser</span>
            </div>
            <el-switch
              v-model="browserNotifications"
              @change="updateNotifications('browser')"
            />
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">Dark mode</span>
              <span class="setting-description">Enable dark mode interface</span>
            </div>
            <el-switch
              v-model="darkMode"
              @change="toggleTheme"
            />
          </div>
        </div>
      </div>

      <div class="onboarding-actions">
        <el-button type="primary" @click="startApp">
          Start
        </el-button>
        <el-button text @click="skipOnboarding">
          Skip setup
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'OnboardingPage',
  
  setup() {
    const store = useStore();
    const router = useRouter();
    
    const emailNotifications = ref(false);
    const browserNotifications = ref(false);
    const darkMode = ref(false);

    const updateNotifications = async (type) => {
      if (type === 'browser' && browserNotifications.value) {
        const permission = await Notification.requestPermission();
        browserNotifications.value = permission === 'granted';
      }
      store.commit('setNotifications', {
        type,
        value: type === 'email' ? emailNotifications.value : browserNotifications.value
      });
    };

    const toggleTheme = () => {
      store.commit('setTheme', darkMode.value ? 'dark' : 'light');
    };

    const startApp = () => {
      store.commit('setVisitedBefore');
      router.push('/home');
    };

    const skipOnboarding = () => {
      store.commit('setVisitedBefore');
      router.push('/home');
    };

    return {
      emailNotifications,
      browserNotifications,
      darkMode,
      updateNotifications,
      toggleTheme,
      startApp,
      skipOnboarding
    };
  },
  mounted() {
    localStorage.setItem('visitedBefore', 'true');
  }
};
</script>

<style scoped>
.onboarding-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 40px;
}

.main-title {
  font-size: 36px;
  color: #15293E;
  text-align: center;
  margin-bottom: 60px;
}

.onboarding-actions {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Остальные стили наследуются из общего дизайна */
</style> 