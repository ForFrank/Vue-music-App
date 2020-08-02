import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import '../src/common/stylus/index.styl'
import fastclick from 'fastclick'
import router from './router'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
