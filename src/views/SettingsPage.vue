<template>
  <div class="main-content">
    <div class="content">
      <h2 class="section-title">Settings</h2>
      <p class="description">
        Here you can customize application and notification settings
      </p>

      <div class="settings-section">
        <h3 class="subsection-title">Notifications</h3>
        
        <div class="settings-group">
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">Email notifications</span>
              <span class="setting-description">Receive notifications about new materials via email</span>
            </div>
            <el-switch
              v-model="notificationsEnabled"
              @change="toggleNotifications"
            />
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">Push notifications</span>
              <span class="setting-description">Receive notifications in browser</span>
            </div>
            <el-switch
              v-model="pushNotifications"
              @change="togglePushNotifications"
            />
          </div>
        </div>
      </div>

      <div class="settings-section">
        <h3 class="subsection-title">Внешний вид</h3>
        
        <div class="settings-group">
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">Темная тема</span>
              <span class="setting-description">Включить темный режим интерфейса</span>
            </div>
            <el-switch
              v-model="darkMode"
              @change="toggleTheme"
            />
          </div>
        </div>
      </div>

      <div class="hint-box">
        <p>Все изменения в настройках сохраняются автоматически</p>
      </div>
    </div>

    <div class="footer">
      <div class="footer-logo">
        <el-icon><StarFilled /></el-icon>
      </div>
      <router-link to="/privacy">Политика конфиденциальности</router-link>
      <router-link to="/terms">Договор оферта</router-link>
      <span>Работает на <span class="open-source">Open Source</span></span>
    </div>
  </div>
</template>

<script>
import { StarFilled } from '@element-plus/icons-vue'
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SettingsPage',
  components: {
    StarFilled
  },
  data() {
    return {
      pushNotifications: false,
      darkMode: false
    }
  },
  computed: {
    ...mapState(['notificationsEnabled']),
  },
  methods: {
    ...mapMutations(['toggleNotifications']),
    togglePushNotifications(value) {
      this.pushNotifications = value;
      this.$message({
        message: `Push-уведомления ${value ? 'включены' : 'выключены'}`,
        type: 'success'
      });
    },
    toggleTheme(value) {
      this.darkMode = value;
      this.$message({
        message: `Темная тема ${value ? 'включена' : 'выключена'}`,
        type: 'success'
      });
    }
  }
};
</script>

<style scoped>
.main-content {
  padding: 0 130px;
  margin-bottom: 100px;
  min-height: calc(100vh - 140px);
}

.content {
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  padding: 40px;
  position: relative;
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

.settings-section {
  margin-bottom: 40px;
}

.subsection-title {
  font-size: 20px;
  font-weight: 600;
  color: #15293E;
  margin-bottom: 24px;
}

.settings-group {
  background: #F8F9FC;
  border-radius: 10px;
  padding: 20px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.setting-item:not(:last-child) {
  border-bottom: 1px solid #E5E9F2;
}

.setting-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.setting-label {
  font-weight: 500;
  color: #15293E;
}

.setting-description {
  font-size: 14px;
  color: #696E76;
}

.hint-box {
  position: absolute;
  right: 40px;
  top: 40px;
  background: #F0F1F6;
  border-radius: 10px;
  padding: 15px 20px;
  width: 220px;
  text-align: center;
  color: #696E76;
  font-size: 14px;
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
  font-size: 20px;
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
:deep(.el-switch.is-checked .el-switch__core) {
  background-color: #2864A4;
  border-color: #2864A4;
}

:deep(.el-switch__core) {
  border-color: #E5E9F2;
}
</style> 