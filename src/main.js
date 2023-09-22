import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'kuantik-fe-components/library/style.css'
import install from 'kuantik-fe-components'



createApp(App).mount('#app')
const app = createApp() //esto ya debe estar en tu proyecto

install(app)