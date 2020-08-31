<template>
  <v-container fluid>
    <v-banner>Event Nr. {{eventDetails.eventId}} - State: {{eventDetails.state}}
      Role: {{eventDetails.host === userDetails.name ? 'BeerMaster' : 'Taster'}}
    </v-banner>
    <h2 v-if="!this.eventDetails">No Event available</h2>

    <!-- BeerMaster View -->
    <div v-else-if="this.eventDetails.host === this.userDetails.name">
      <AddBeers v-if="this.eventDetails.state === 'PREPARING'"/>
      <BeerList v-else/>
    </div>

    <!-- Taster View -->
    <div v-else>
      <TastingForm/>
    </div>
  </v-container>
</template>

<script>
import AddBeers from '@/components/AddBeers'
import BeerList from '@/components/BeerList'
import TastingForm from '@/components/TastingForm'
import { mapState } from 'vuex'
export default {
  data: () => ({
    host: '',
    state: '',
  }),
  components: {
    AddBeers,
    BeerList,
    TastingForm
  },
  computed: {
    ...mapState(['eventDetails', 'userDetails']),
  },
  mounted() {
    if (localStorage.getItem('beerList')) {
      this.$store.commit('setBeersForCurrentEvent', JSON.parse(localStorage.getItem('beerList')))
    }
  }
}
</script>