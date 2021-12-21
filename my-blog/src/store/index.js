import { createStore } from "vuex";

const store = createStore({
  state: {
    //points: 0
    user: null
  },
  mutations: {
    /*updatedPoints(state, payload) {
      state.points += payload
    },*/
    setUser(state, payload) {
      state.user = payload
      console.log(`use state changed: ${state.user}`);
    }
  }
})

export default store