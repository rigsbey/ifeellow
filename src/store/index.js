import { createStore } from 'vuex';

export const store = createStore({
  state: {
    theme: localStorage.getItem('theme') || 'light',
    notifications: {
      email: localStorage.getItem('emailNotifications') === 'true',
      browser: localStorage.getItem('browserNotifications') === 'true'
    },
    userState: {
      currentMood: null,
      diagnosticsResults: null,
      lastExercise: null
    },
    diaryEntries: JSON.parse(localStorage.getItem('diaryEntries')) || [],
    visitedBefore: localStorage.getItem('visitedBefore') === 'true'
  },
  
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
      localStorage.setItem('theme', theme);
      document.body.setAttribute('data-theme', theme);
    },
    
    setNotifications(state, { type, value }) {
      state.notifications[type] = value;
      localStorage.setItem(`${type}Notifications`, value);
    },
    
    setVisitedBefore(state) {
      state.visitedBefore = true;
      localStorage.setItem('visitedBefore', 'true');
    },
    
    addDiaryEntry(state, entry) {
      state.diaryEntries.push({
        ...entry,
        id: Date.now(),
        date: new Date().toISOString()
      });
      localStorage.setItem('diaryEntries', JSON.stringify(state.diaryEntries));
    },
    
    updateUserState(state, { key, value }) {
      state.userState[key] = value;
    }
  },
  
  actions: {
    async initializeApp({ commit, state }) {
      // Инициализация уведомлений браузера
      if (state.notifications.browser) {
        try {
          const permission = await Notification.requestPermission();
          commit('setNotifications', { type: 'browser', value: permission === 'granted' });
        } catch (error) {
          console.error('Ошибка при запросе разрешений уведомлений:', error);
        }
      }
    },
    
    async scheduleNotification({ state }, { title, body }) {
      if (state.notifications.browser && Notification.permission === 'granted') {
        new Notification(title, { body });
      }
    }
  }
});