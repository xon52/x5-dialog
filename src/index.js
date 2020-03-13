import Component from './Component.vue'
import PluginStore from './store'
import './scss/index.scss'

// Modal defaults
const defaultOptions = {
  buttons: 'OK',
  cancelValue: false,
  cancelText: 'Cancel',
  data: null,
  okValue: true,
  okText: 'OK',
  onCancel: () => {},
  onClose: () => {},
  onOK: () => {},
  permanent: false,
  rules: [],
  title: null,
  width: '650px',
}

// Options
const typeOptions = ['alert', 'confirm', 'prompt']
const buttonsOptions = ['OK', 'Cancel', 'OKCancel']

export default function(Vue, store) {
  // Register Vuex store
  if (!store) throw new Error('A Vuex store is required by the x5Dialog plugin')
  store.registerModule('x5/d', PluginStore)
  // Register component
  Vue.component('x5Dialog', Component)
  // Add function
  const add = (options, component) => {
    // Check type matches options
    if (options.type && !typeOptions.includes(options.type))
      throw new Error(
        `Invalid type "${options.type}" used in x5Dialog Plugin. Valid options include: ${typeOptions.join(', ')}.`,
      )
    // Check buttons matches options
    if (options.buttons && !buttonsOptions.includes(options.buttons))
      throw new Error(
        `Invalid buttons "${options.buttons}" used in x5Dialog Plugin. Valid options include: ${buttonsOptions.join(
          ', ',
        )}.`,
      )
    // Initial modal creation
    let modal = { ...defaultOptions, ...options, component }
    // Add close function
    modal.close = val => {
      if (modal.onClose) modal.onClose(val)
      modal.resolve(val)
      store.dispatch('x5/d/remove')
    }
    // Add promise to modal and return reference
    const promise = new Promise(resolve => (modal.resolve = resolve))
    store.dispatch('x5/d/add', modal)
    return promise
  }
  // Create hooks on main vue
  Vue.prototype.$alert = (text, options) => add({ text, type: 'alert', buttons: 'OK', width: '500px', ...options })
  Vue.prototype.$confirm = (text, options) =>
    add({ text, type: 'confirm', buttons: 'OKCancel', width: '500px', ...options })
  Vue.prototype.$prompt = (text, options) =>
    add({ text, type: 'prompt', buttons: 'OKCancel', width: '500px', ...options })
  Vue.prototype.$modal = (component, options) => add({ ...options }, component)
}
