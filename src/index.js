import Vue from 'vue'
import x5DVue from './js/x5DVue'
import './scss/index.scss'

export default {
  // Public Methods
  modal: (component, options) => x5DVue.add('modal', options, component),
  alert: (payload) => x5DVue.add('alert', payload),
  confirm: (payload) => x5DVue.add('confirm', payload),
  prompt: (payload) => x5DVue.add('prompt', payload),

  install (Vue, options) {
	  // Set options
	x5DVue.setOptions(options)
    // Create and mount HTML element for new Vue
    const el = document.createElement('div')
    el.setAttribute('id', 'x5-d-vue')
    document.body.appendChild(el)
    x5DVue.$mount('#x5-d-vue')
    // Create hooks for Vue
    Vue.prototype.$modal = this.modal
    Vue.prototype.$alert = this.alert
    Vue.prototype.$confirm = this.confirm
    Vue.prototype.$prompt = this.prompt
  }

}
