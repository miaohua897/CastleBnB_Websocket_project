const state = () => ({
  authenticated: false
})

const mutations = {
  SET_AUTH(state, auth) {
    state.authenticated = auth
  }
}

const actions = {
  setAuth({ commit }, auth) {
    commit('SET_AUTH', auth)
  }
}

const getters = {
  isAuthenticated: (state) => state.authenticated
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
