<template>
  <el-container class="layout-container">
    <el-header height="60px">
      <el-menu 
        :default-active="activeMenu" 
        mode="horizontal" 
        router
        class="el-menu-demo"
      >
        <el-menu-item index="/">Главная</el-menu-item>
        <el-menu-item index="/diary">Дневник</el-menu-item>
        <el-menu-item index="/tips">Советы</el-menu-item>
        <el-menu-item index="/settings">Настройки</el-menu-item>
      </el-menu>
    </el-header>
    
    <el-main>
      <template v-if="$route.path === '/'">
        <el-row justify="center" align="middle" class="hero-section">
          <el-col :span="16">
            <h1 class="main-title">Срочная психологическая поддержка</h1>
            <el-button type="primary" size="large" @click="$router.push('/diary')">
              Начать
            </el-button>
          </el-col>
        </el-row>
      </template>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  computed: {
    activeMenu() {
      return this.$route.path;
    }
  }
};
</script>

<style>
.layout-container {
  min-height: 100vh;
}

.el-header {
  padding: 0;
  background-color: var(--el-bg-color);
  border-bottom: 1px solid var(--el-border-color-light);
}

.el-menu-demo {
  justify-content: center;
}

.hero-section {
  padding: 60px 0;
  text-align: center;
}

.main-title {
  font-family: 'Gilroy', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: var(--el-text-color-primary);
  margin-bottom: 32px;
}

/* Глобальные стили Element Plus */
:root {
  --el-color-primary: #6c63ff;
  --el-font-family: 'Gilroy', sans-serif;
}

/* Переопределение стилей Element Plus */
.el-button {
  font-family: 'Gilroy', sans-serif;
}

.el-menu-item {
  font-family: 'Gilroy', sans-serif;
  font-size: 16px;
}
</style>