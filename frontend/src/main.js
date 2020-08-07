import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

import Admin from './views/Admin'
import Main from './views/Main'
import BeerTasting from './views/BeerTasting'
import Database from './views/Database'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Main },
  { path: '/admin', component: Admin },
  { path: '/beertasting', component: BeerTasting },
  { path: '/database', component: Database },
  { path: '/*', redirect: '/'},
]

const router = new VueRouter({ routes })

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
