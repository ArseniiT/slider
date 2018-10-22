import Vue from 'vue'
import App from './App.vue'

require('../node_modules/animate.css/animate.min.css')

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
