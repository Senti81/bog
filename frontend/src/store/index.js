import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    token: localStorage.getItem('X-Auth'),
    userDetails: {},
    eventDetails: {},
    userList: [],
    eventList: []
  },
  getters: {
    isLoading: state => state.loading,
    getToken: state => state.token,
    getUserDetails: state => state.userDetails,
    getUserList: state => state.userList,
    getEventList: state => state.eventList,
  },
  mutations: {
    toggleLoading: (state) => state.loading = !state.loading,
    setToken: (state, token) => state.token = token,
    setUserDetails: (state, user) => state.userDetails = user,
    setBeersForCurrentEvent: (state, payload) => state.eventDetails.beers = payload,
    loadEventList: (state, eventList) => state.eventList = eventList,
    loadCurrentEvent: (state, event) => state.eventDetails = event,
    updateEventState: (state, payload) => state.eventDetails.state = payload,
    loadUserList: (state, userList) => state.userList = userList,
    logout: (state) => {
      state.token = '',
      state.userDetails = ''
      localStorage.removeItem('X-Auth')
    }
  },
  actions: {
    async login({ commit, dispatch }, payload) {
      commit('toggleLoading')
      const result = await axios.post('/api/auth', payload)
      if (result.data.success !== false) {
        commit('setToken', result.data.token)
        commit('setUserDetails', result.data.userDetails)
        dispatch('loadCurrentEvent')
        localStorage.setItem('X-Auth', result.data.token)
      }
     commit('toggleLoading')
    },
    async validateToken({ commit, dispatch }, token) {
      commit('toggleLoading')
      try {
        const userDetails = await axios.get('/api/auth', {
          headers: { 'X-auth': token }
        })
        commit('setToken', token)
        commit('setUserDetails', userDetails.data)
        dispatch('loadCurrentEvent')  
      } catch (error) {
        console.error(error)
        localStorage.removeItem('X-Auth')
        commit('setToken', null)
      } finally {
        commit('toggleLoading')
      }
    },
    async loadCurrentEvent({ commit }) {
      const result = await axios.get('/api/events/active', {
        headers: { 'X-auth': this.state.token }
      })
      if (result.data)
        commit('loadCurrentEvent',  result.data)
    },
    async loadBeerListForCurrentEvent({ commit }) {
      const result = await axios.get(`/api/events/${this.state.eventDetails.eventId}/beers`, { headers: { 'X-Auth': this.state.token}})
      if (result.data)
        commit('setBeersForCurrentEvent', result.data)
    },
    async addBeersToCurrentEvent({ dispatch }, payload) {
      await axios.post('/api/beers', payload, { headers: { 'X-Auth': this.state.token}})
      dispatch('updateEventState', 'OPEN')
      dispatch('loadBeerListForCurrentEvent')
    },
    async updateEventState({ commit }, state) {
      await axios.put(`/api/events/${this.state.eventDetails.eventId}`, { state }, { headers: { 'X-Auth': this.state.token}})
      commit('updateEventState', state)
    },
    
    // Admin Stuff only
    async loadUserList({ commit }) {
      const result = await axios.get('/api/users', {
        headers: { 'X-auth': this.state.token }
      })
      commit('loadUserList', result.data)
    },
    async loadEventList({ commit }) {
      const result = await axios.get('/api/events', {
        headers: { 'X-auth': this.state.token }
      })
      commit('loadEventList',  result.data)
    },
    async addEvent({ dispatch }, payload) {
      await axios.post('/api/events', payload, { headers: { 'X-Auth': this.state.token}})
      dispatch('loadEventList', payload)
    },
  }
})
