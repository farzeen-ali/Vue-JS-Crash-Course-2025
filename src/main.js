import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import LocalGlobalComponents from './components/LocalGlobalComponents.vue';
// createApp(App).mount('#app')
const app = createApp(App);
app.component('LocalGlobalComponents', LocalGlobalComponents)
app.mount('#app');
