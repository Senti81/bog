<template>
  <v-bottom-navigation
    fixed
    grow
  >
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/admin" v-if="getUserDetails.role === 'ADMIN'">
      <span>Admin</span>
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <v-btn to="/beertasting">
      <span>Start</span>
      <v-icon>mdi-play</v-icon>
    </v-btn>

    <v-btn to="/database">
      <span>Database</span>
      <v-icon>mdi-database</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getUserDetails'])
  }
}
</script>  
