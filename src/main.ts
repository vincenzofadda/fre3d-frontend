import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import Notifications from 'notiwind'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const pinia = createPinia()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})

pinia.use(piniaPluginPersistedState)

app.use(pinia)
app.use(router)
app.use(Notifications)

app.mount('#app')
