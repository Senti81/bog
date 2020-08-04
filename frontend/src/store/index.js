import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    loggedInUser: ''
  },
  getters: {
    // getUserDetails: state => state.userDetails,
    getUsers: state => state.users,
  },
  mutations: {
    setUsers: (state, users) => state.users = users,
    setLoggedInUser: (state, user) => state.loggedInUser = user
  },
  actions: {
    async setUsers({ commit }) {
      const payload = await axios.get('/api/users')
      commit('setUsers', payload.data)
    }
  },
  modules: {
  }
})
