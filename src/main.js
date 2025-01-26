import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './styles/element-variables.scss';
import router from './router';
import { store } from './store';
import { createHead } from '@vueuse/head'

const app = createApp(App);
const head = createHead()

app.use(head)
app.use(router);
app.use(ElementPlus);
app.use(store);

app.config.errorHandler = (err, vm, info) => {
  console.error('Error: ', err);
  console.error('Info: ', info);
};

app.mount('#app');