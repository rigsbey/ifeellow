<template>
  <div class="app-container">
    <div class="header">
      <div class="logo">
        <div class="logo-icon">
          <el-icon><StarFilled /></el-icon>
        </div>
        <span>спасибо</span>
      </div>
      <div class="user-icon"></div>
    </div>

    <el-menu 
      :default-active="activeMenu" 
      mode="horizontal" 
      router
      class="nav-menu"
    >
      <el-menu-item index="/">Главная</el-menu-item>
      <el-menu-item index="/diary">Дневник</el-menu-item>
      <el-menu-item index="/tips">Советы</el-menu-item>
      <el-menu-item index="/settings">Настройки</el-menu-item>
    </el-menu>
    
    <router-view />
  </div>
</template>

<script>
import { StarFilled } from '@element-plus/icons-vue'

export default {
  components: {
    StarFilled
  },
  computed: {
    activeMenu() {
      return this.$route.path;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #FAFAFD;
  min-height: 100vh;
}

.app-container {
  min-height: 100vh;
}

.header {
  padding: 20px 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-icon {
  background: #E31235;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
}

.nav-menu {
  display: flex;
  justify-content: center;
  background: white;
  border-bottom: 1px solid #F0F1F6;
}

.user-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #F0F1F6;
}

/* Стили для Element Plus компонентов */
:deep(.el-menu) {
  border-bottom: none;
}

:deep(.el-menu-item) {
  font-family: 'Gilroy', sans-serif;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
}

:deep(.el-menu-item.is-active) {
  color: #2864A4;
  border-bottom: 2px solid #2864A4;
}
</style>