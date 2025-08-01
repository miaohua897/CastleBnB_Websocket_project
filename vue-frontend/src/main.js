import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from 'vue3-icon'

createApp(App).component('SvgIcon',SvgIcon).use(router).use(store).mount('#app')
