const store = {
  namespaced: true,
  state: {
    modals: [],
  },
  getters: {
    modal: state => (state.modals.length > 0 ? state.modals[0] : null),
  },
  mutations: {
    ADD: (state, payload) => state.modals.unshift(payload),
    REMOVE: (state, payload) => (state.modals = state.modals.slice(1)),
  },
  actions: {
    add: ({ commit }, payload) => commit('ADD', payload),
    remove: ({ commit }) => commit('REMOVE'),
  },
}

export default store
