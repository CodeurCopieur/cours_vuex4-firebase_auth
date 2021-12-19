import { createStore } from "vuex";

const store = createStore({
  state: {
    points: 0
  },
  mutations: {
    updatedPoints(state, payload) {
      state.points += payload
    },
  }
})

export default store