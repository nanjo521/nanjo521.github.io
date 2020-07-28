import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'fullpage.js/vendors/scrolloverflow' 
import '../src/assets/fullpage.min.css' 
import VueFullPage from 'vue-fullpage.js'
import '../src/assets/animate.min.css'
import store from './store'

Vue.use(VueFullPage);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store, 
  render: h => h(App),
}).$mount('#app')
