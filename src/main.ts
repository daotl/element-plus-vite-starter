import { createApp } from 'vue'
import setupElementPlus from '@/setup/element-plus'
import App from './App.vue'

const app = createApp(App)
setupElementPlus(app)
app.mount('#app')
