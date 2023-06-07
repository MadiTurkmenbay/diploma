import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'

const app = createApp(App)
const instance = axios.create({
    baseURL: 'http://52.72.95.158:8080/api/v1/',
});

app.config.globalProperties.$axios = instance;
app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')
