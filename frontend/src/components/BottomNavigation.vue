<template>
  <v-bottom-navigation
    fixed
    grow
    color="orange darken-1"
  >
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/admin" v-if="userDetails.role === 'ADMIN'">
      <span>Admin</span>
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <v-btn to="/beertasting" :disabled="!this.canParticipantJoin && !this.canBeerMasterJoin">    
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
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['userDetails', 'eventDetails']),
    canParticipantJoin() {
      return this.eventDetails.state === 'OPEN'
    },
    canBeerMasterJoin() {
      return this.userDetails.name === this.eventDetails.host
    }
  }
}
</script>  
