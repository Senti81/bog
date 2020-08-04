import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetails: {
      id: 1,
      userName: 'Wasser',
      email: 'wasser@servebeer.com',
    },
  },
  getters: {
    getUserDetails: state => state.userDetails
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
