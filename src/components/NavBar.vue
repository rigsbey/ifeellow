<template>
  <div class="nav-container">
    <div class="nav-content">
      <el-menu 
        :default-active="activeMenu" 
        mode="horizontal" 
        router
        class="nav-menu"
      >
        <el-menu-item index="/">
          <PhHouse weight="bold" />
          Home
        </el-menu-item>
        <el-menu-item index="/diagnostics">
          <PhClipboardText weight="bold" />
          Diagnostics
        </el-menu-item>
        <el-menu-item index="/exercises">
          <PhHeartbeat weight="bold" />
          Exercises
        </el-menu-item>
        <el-menu-item index="/hotline">
          <PhPhone weight="bold" />
          Hotline
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { 
  PhHouse, 
  PhClipboardText,
  PhHeartbeat,
  PhPhone,
} from '@phosphor-icons/vue'

export default {
  name: 'NavBar',
  components: {
    PhHouse,
    PhClipboardText,
    PhHeartbeat,
    PhPhone,
  },
  setup() {
    const route = useRoute()
    const activeMenu = computed(() => route.path)

    return {
      activeMenu
    }
  }
}
</script>

<style scoped>
.nav-container {
  background: white;
  border-bottom: 1px solid #F0F1F6;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
}

@media (min-width: 1400px) {
  .nav-content {
    max-width: 1000px;
  }
}

.nav-menu {
  flex: 1;
  display: flex;
  justify-content: center;
  border-bottom: none;
}

:deep(.el-menu) {
  border-bottom: none;
}

:deep(.el-menu-item) {
  font-size: 16px;
  height: 60px;
  line-height: 60px;
}

:deep(.el-menu-item.is-active) {
  color: #2864A4;
  border-bottom: 2px solid #2864A4;
}

@media (max-width: 768px) {
  .nav-content {
    padding: 0 16px;
  }

  :deep(.el-menu-item) {
    padding: 0 12px;
    font-size: 14px;
  }
}
</style> 