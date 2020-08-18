<template>
  <v-container fluid>
    <v-banner>Event Nr. {{eventDetails.eventId}} - State: {{eventDetails.state}}
      Role: {{eventDetails.host === userDetails.name ? 'BeerMaster' : 'Taster'}}
    </v-banner>
    <h2 v-if="!this.eventDetails">No Event available</h2>

    <!-- BeerMaster View -->
    <div v-else-if="this.eventDetails.host === this.userDetails.name">
      <AddBeers v-show="this.eventDetails.state === 'PREPARING'"/>
      <BeerList v-show="this.eventDetails.state === 'OPEN'"/>
    </div>

    <!-- Taster View -->
    <h2 v-else></h2>
  </v-container>
</template>

<script>
import AddBeers from '@/components/AddBeers'
import BeerList from '@/components/BeerList'
import { mapState } from 'vuex'
export default {
  data: () => ({
    host: '',
    state: '',
  }),
  components: {
    AddBeers,
    BeerList
  },
  computed: {
    ...mapState(['eventDetails', 'userDetails']),
  },
}
</script>