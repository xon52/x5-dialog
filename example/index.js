import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import x5Dialog from '../dist'
// import x5Dialog from '../src'

Vue.use(Vuex)
const store = new Vuex.Store()

Vue.use(x5Dialog, store)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
})
