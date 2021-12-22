import { createStore } from "vuex";

const store = createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('use state changed:', state.user);
    }
  },
  actions: {
    signup({commit}, { email, password }) {
      console.log('signup action');

      // async code
      setTimeout(()=> {
        commit('setUser', { email, password })
      }, 2000)
    }
  }
})

export default store