import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { globalRegister } from './global'
const app = createApp(App)
globalRegister(app)
app.use(router).use(ElementPlus)
app.mount('#app')
