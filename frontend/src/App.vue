<template>
  <v-app>
    <Login v-if="!getToken" />
    <v-container fluid class="fill-height" v-else>
      <ApplicationBar/>
      <v-main>
        <router-view></router-view>
      </v-main>
      <BottomNavigation/>
    </v-container>    
  </v-app>
</template>

<script>
import Login from '@/components/Login'
import ApplicationBar from '@/components/ApplicationBar'
import BottomNavigation from '@/components/BottomNavigation'

import { mapGetters } from 'vuex'

export default {
  data:() => ({
  }),
  name: 'App',
  components: {
    Login,
    ApplicationBar,
    BottomNavigation
  },
  computed: {
    ...mapGetters(['getToken'])
  },
  mounted() {
    const token = localStorage.getItem('X-Auth')
    if(token) {
      this.$store.dispatch('validateToken', token)
      this.$store.dispatch('loadUserList', token)
    }
  }
};
</script>
