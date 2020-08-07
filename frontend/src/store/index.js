import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    token: localStorage.getItem('X-Auth'),
    userDetails: '',
    userList: []
  },
  getters: {
    isLoading: state => state.loading,
    getToken: state => state.token,
    getUserDetails: state => state.userDetails,
    getUserList: state => state.userList,
  },
  mutations: {
    toggleLoading: (state) => state.loading = !state.loading,
    setToken: (state, token) => state.token = token,
    setUserDetails: (state, user) => state.userDetails = user,
    loadUserList: (state, userList) => state.userList = userList,
    logout: (state) => {
      state.token = '',
      state.userDetails = ''
      localStorage.removeItem('X-Auth')
    }
  },
  actions: {
    async login({ commit }, payload) {
      commit('toggleLoading')
      const result = await axios.post('/api/auth', payload)
      if (result.data.success !== false) {
        commit('setToken', result.data.token)
        commit('setUserDetails', result.data.userDetails) 
        localStorage.setItem('X-Auth', result.data.token)
      }
     commit('toggleLoading')
    },
    async validateToken({ commit }, token) {
      commit('toggleLoading')
      try {
        const userDetails = await axios.get('/api/auth', {
          headers: { 'X-auth': token }
        })
        commit('setToken', token)
        commit('setUserDetails', userDetails.data)        
      } catch (error) {
        console.error(error)
        localStorage.removeItem('X-Auth')
        commit('setToken', null)
      } finally {
        commit('toggleLoading')
      }
    },
    async loadUserList({ commit }, token) {
      const result = await axios.get('/api/users', {
        headers: { 'X-auth': token }
      })
      commit('loadUserList', result.data)
    },
  },
  modules: {
  }
})
