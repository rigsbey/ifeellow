<template>
  <div class="breadcrumbs">
    <span>Подписчик</span>
    <span>Личный кабинет</span>
    <span>Настройки профиля</span>
  </div>

  <div class="container">
    <div class="header">
      <div class="logo">
        <div class="logo-icon">THNX</div>
        <span>спасибо</span>
      </div>
      <div class="user-icon"></div>
    </div>

    <div class="main-content">
      <div class="sidebar">
        <router-link to="/profile" class="menu-item active">Настройки профиля</router-link>
        <div class="menu-divider"></div>
        <router-link to="/subscriptions" class="menu-item">Подписки</router-link>
        <a @click="logout" class="menu-item">Выход из аккаунта</a>
      </div>

      <div class="content">
        <h2 class="section-title">Личные данные</h2>
        
        <div class="form-group">
          <label>E-mail*</label>
          <div class="input-field" v-if="!isEditingEmail">
            <span>{{ user.email }}</span>
            <button class="edit-button" @click="startEditingEmail">изменить</button>
          </div>
          <el-input
            v-else
            v-model="editedEmail"
            @blur="saveEmail"
            @keyup.enter="saveEmail"
            ref="emailInput"
          />
        </div>

        <div class="form-group">
          <label>Имя и Фамилия*</label>
          <div class="input-field" v-if="!isEditingName">
            <span>{{ user.name }}</span>
            <button class="edit-button" @click="startEditingName">изменить</button>
          </div>
          <el-input
            v-else
            v-model="editedName"
            @blur="saveName"
            @keyup.enter="saveName"
            ref="nameInput"
          />
        </div>

        <h2 class="section-title">Оповещения</h2>
        <div class="notification-row">
          <span>E-mail оповещение о новом посте</span>
          <el-switch
            v-model="emailNotifications"
            @change="updateNotifications"
          />
        </div>

        <div class="hint-box">
          <p>Все изменения в настройках сохраняются автоматически</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-logo">THNX</div>
      <router-link to="/privacy">Политика конфиденциальности</router-link>
      <router-link to="/terms">Договор оферта</router-link>
      <span>Работает на <span class="open-source">Open Source</span></span>
    </div>
  </div>
</template>

<script>
import { ref, computed, nextTick } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

export default {
  name: 'ProfilePage',
  setup() {
    const store = useStore();
    const router = useRouter();
    
    const emailInput = ref(null);
    const nameInput = ref(null);
    
    const isEditingEmail = ref(false);
    const isEditingName = ref(false);
    const editedEmail = ref('');
    const editedName = ref('');
    const emailNotifications = ref(store.state.notificationsEnabled);

    const user = computed(() => store.state.user);

    const startEditingEmail = () => {
      editedEmail.value = user.value.email;
      isEditingEmail.value = true;
      nextTick(() => {
        if (emailInput.value) {
          emailInput.value.focus();
        }
      });
    };

    const startEditingName = () => {
      editedName.value = user.value.name;
      isEditingName.value = true;
      nextTick(() => {
        if (nameInput.value) {
          nameInput.value.focus();
        }
      });
    };

    const saveEmail = async () => {
      if (editedEmail.value && editedEmail.value !== user.value.email) {
        try {
          await store.dispatch('updateUserEmail', editedEmail.value);
          ElMessage.success('Email успешно обновлен');
        } catch (error) {
          ElMessage.error('Ошибка при обновлении email');
        }
      }
      isEditingEmail.value = false;
    };

    const saveName = async () => {
      if (editedName.value && editedName.value !== user.value.name) {
        try {
          await store.dispatch('updateUserName', editedName.value);
          ElMessage.success('Имя успешно обновлено');
        } catch (error) {
          ElMessage.error('Ошибка при обновлении имени');
        }
      }
      isEditingName.value = false;
    };

    const updateNotifications = (value) => {
      store.commit('toggleNotifications');
      ElMessage.success(`Уведомления ${value ? 'включены' : 'выключены'}`);
    };

    const logout = async () => {
      try {
        await store.dispatch('logout');
        router.push('/login');
        ElMessage.success('Вы успешно вышли из системы');
      } catch (error) {
        ElMessage.error('Ошибка при выходе из системы');
      }
    };

    return {
      user,
      isEditingEmail,
      isEditingName,
      editedEmail,
      editedName,
      emailNotifications,
      emailInput,
      nameInput,
      startEditingEmail,
      startEditingName,
      saveEmail,
      saveName,
      updateNotifications,
      logout
    };
  }
};
</script>

<style scoped>
.breadcrumbs {
  padding: 20px 130px;
  color: #656970;
  font-size: 14px;
}

.breadcrumbs span:not(:last-child):after {
  content: " / ";
  color: #656970;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
}

.header {
  padding: 20px 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-weight: bold;
}

.logo-icon img {
  width: 50px;
  height: 38px;
}

.logo-line {
  position: absolute;
  width: 31.38px;
  height: 7.93px;
  left: 9px;
  top: 12px;
  border: 2px solid white;
}

.logo-text {
  font-family: 'Gilroy';
  font-weight: 700;
  font-size: 28px;
  color: #15293E;
}

.user-icon {
  width: 50px;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 0px 40px 1px #F0F0F0;
  border-radius: 40px;
}

.main-content {
  padding: 0 130px;
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.sidebar {
  width: 200px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  padding: 20px;
}

.menu-item {
  padding: 10px 0;
  color: #696E76;
  text-decoration: none;
  cursor: pointer;
  display: block;
}

.menu-item.active {
  color: #15293E;
  font-weight: 600;
}

.menu-item:hover {
  color: #15293E;
}

.menu-divider {
  height: 1px;
  background: #F0F1F6;
  margin: 10px 0;
}

.content {
  flex: 1;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  padding: 40px;
  position: relative;
  max-width: 950px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #15293E;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 30px;
}

.form-group label {
  display: block;
  color: #696E76;
  margin-bottom: 10px;
}

.input-field {
  background: #F8F9FC;
  border-radius: 10px;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
}

.input-field span {
  font-family: 'SF Pro Display';
  font-size: 16px;
  color: #15293E;
}

.edit-button {
  color: #2864A4;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.notification-title {
  margin-top: 40px;
}

.notification-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #696E76;
  margin-top: 20px;
}

.notification-row span {
  font-family: 'Gilroy';
  font-size: 16px;
  color: #696E76;
}

.toggle-switch {
  width: 44px;
  height: 24px;
  background: #2864A4;
  border-radius: 20px;
  position: relative;
}

.toggle-switch::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: #FFFFFF;
  border-radius: 50%;
  right: 2px;
  top: 2px;
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

.hint-box p {
  font-family: 'SF Pro Display';
  font-size: 14px;
  color: #696E76;
  text-align: center;
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

.footer-logo img {
  width: 50px;
  height: 38px;
}

.footer-logo-line {
  position: absolute;
  width: 31.38px;
  height: 7.93px;
  left: 9px;
  top: 12px;
  border: 2px solid white;
}

.open-source {
  color: #2864A4;
}

.el-input {
  margin-top: 10px;
}

.el-switch {
  transition: all 0.3s ease;
}

.footer a {
  color: inherit;
  text-decoration: none;
}

.footer a:hover {
  color: #2864A4;
}

/* Стили для Element Plus компонентов */
:deep(.el-input__inner) {
  background: #F8F9FC;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  width: 360px;
}

:deep(.el-switch) {
  margin-left: 20px;
}

:deep(.el-switch.is-checked .el-switch__core) {
  background-color: #2864A4;
  border-color: #2864A4;
}
</style>