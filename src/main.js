// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/animate.css'
import './css/icomoon.css'
import './css/themify-icons.css'
import './css/bootstrap.css'
import './css/magnific-popup.css'
import './css/bootstrap-datepicker.min.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import './css/style.css'
import './js/jquery.min.js'
import './js/jquery.easing.1.3.js'
import './js/bootstrap.min.js'
import './js/jquery.waypoints.min.js'
import './js/owl.carousel.min.js'
import './js/jquery.countTo.js'
import './js/jquery.stellar.min.js'
import './js/jquery.magnific-popup.min.js'
import './js/magnific-popup-options.js'
import './js/bootstrap-datepicker.min.js'
import './js/main.js'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
