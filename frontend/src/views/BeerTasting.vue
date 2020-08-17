<template>
  <v-container fluid>
    <h2 v-if="!this.eventDetails">No Event available</h2>
    <h2 v-else-if="this.eventDetails.host === this.userDetails.name">Role: BeerMaster</h2>
    <h2 v-else>Role: Taster</h2>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    host: '',
    state: '',
  }),
  computed: {
    ...mapState(['eventDetails', 'userDetails']),
    ...mapActions(['loadCurrentEvent'])
  },
  mounted() {
    this.loadCurrentEvent
  }
}
</script>