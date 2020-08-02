import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import '../src/common/stylus/index.styl'
import fastclick from 'fastclick'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  render: h => h(App),
}).$mount('#app')
