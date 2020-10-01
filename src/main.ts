import { createApp } from 'vue'
import App from './App.vue'

import './tailwind.css'
import './styles.scss'

import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js'
import '../node_modules/@fortawesome/fontawesome-free/js/brands.js'
import '../node_modules/@fortawesome/fontawesome-free/js/regular.js'
import '../node_modules/@fortawesome/fontawesome-free/js/solid.js'

const app = createApp(App)

app.mount('#app')
