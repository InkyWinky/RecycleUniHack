import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    listings: []
  },
  mutations: {
    SET_USER (state, user) {
    state.user = user
  },
    REMOVE_USER (state) {
      state.user = null
    }
  },
  actions: {
      

}
})
