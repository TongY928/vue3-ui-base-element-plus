import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { globalRegister } from './global'
import '@/assets/css/index.scss'

const app = createApp(App)

globalRegister(app)

app.use(router)
app.mount('#app')
