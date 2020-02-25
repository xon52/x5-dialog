import App from './App.vue'
import Vue from 'vue'

const x5DVue = new Vue({
  name: 'x5-D-Plugin',
  data: {
    modals: [],
    options: { zIndex: 200 },
    defaultOptions: {
      width: 500,
      labelOK: 'OK',
      labelCancel: 'Cancel',
      overlay: true,
      permanent: false,
      rules: [],
    },
  },
  methods: {
    add(type, payload, component) {
      // Check type matches options
      if (!['modal', 'alert', 'confirm', 'prompt'].includes(type)) throw new Error(`Invalid type "${type}" used in x5Dialog.`)
      // Initial modal creation
      let modal = null
      if (type === 'modal') modal = { component, options: { ...this.defaultOptions, ...payload } }
      else if (typeof payload === 'string') modal = { options: { ...this.defaultOptions, ...{ type }, ...{ text: payload } } }
      else if (typeof payload === 'object') modal = { options: { ...this.defaultOptions, ...{ type }, ...payload } }
      else throw new Error(`Invalid parameter ${JSON.stringify(payload)} used in x5Dialog.`)
      // Add promise to modal and return reference
      const promise = new Promise(resolve => (modal.resolve = resolve))
      this.modals.unshift(modal)
      return promise
    },
    remove() {
      this.modals = this.modals.slice(1)
    },
    setOptions(payload) {
      this.options = { ...this.options, ...payload }
    },
  },
  render: h => h(App),
})

export default x5DVue
