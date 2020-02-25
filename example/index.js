import Vue from 'vue'
import App from './App.vue'

import x5Dialog from 'x5-dialog'
Vue.use(x5Dialog)

new Vue({
  el: '#app',
  render: h => h(App),
})
