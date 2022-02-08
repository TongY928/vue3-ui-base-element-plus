import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { registerIcons } from './global'
const app = createApp(App)
registerIcons(app, Icons)
app.use(router).use(ElementPlus)
app.mount('#app')
