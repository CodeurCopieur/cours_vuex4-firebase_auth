import { createStore } from "vuex";

// imports firebase
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

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
    async signup({commit}, { email, password }) {
      console.log('signup action');

      // async code
      const res = await createUserWithEmailAndPassword(auth, email, password)

      if(res) {
        commit('setUser', res.user)
      } else {
        throw new Error('could not complete signup')
      }
    },
    async login({commit}, { email, password }) {
      console.log('login action');

      // async code
      const res = await signInWithEmailAndPassword(auth, email, password)

      if(res) {
        commit('setUser', res.user)
      } else {
        throw new Error('could not complete login')
      }
    }
  }
})

export default store