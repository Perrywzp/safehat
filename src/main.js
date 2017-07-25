// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'normalize.css'
import 'mod/element-ui/lib/theme-default/index.css'
import 'mod/perfect-scrollbar/dist/css/perfect-scrollbar.css'

Vue.config.productionTip = false
Vue.use(Element);
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
