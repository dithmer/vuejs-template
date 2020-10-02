import { createApp } from 'vue';
import App from './App.vue';

import './tailwind.css';
import './styles.scss';

import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome';
import '../node_modules/@fortawesome/fontawesome-free/js/brands';
import '../node_modules/@fortawesome/fontawesome-free/js/regular';
import '../node_modules/@fortawesome/fontawesome-free/js/solid';

const app = createApp(App);

app.mount('#app');
