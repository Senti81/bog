<template>
  <v-card 
    class="mx-auto pa-2"
    max-width="428"
    outlined
    elevation="4"
    >
    <v-card-title class="headline">Number of beers</v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="pr-4">
          <v-slider
            v-model="slider"
            class="align-center"
            :min="min"
            :max="max"
            hide-details
            :thumb-size="24"
            thumb-label="always"
          >
          </v-slider>
        </v-col>
      </v-row>
    </v-card-text>
      <v-text-field
        v-for="n in slider"
        :key="n"
        v-model="beerList[n-1]"
        label="Name of beer"
        single-line
        solo
        >
      </v-text-field>
      <v-btn
      block
      color="success"
      class="mr-4"
      @click="submit"
      >
        Ok
      </v-btn>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      min: 1,
      max: 10,
      slider: 0,
      beerList: []
    }
  },
  methods: {
    async submit() {
      const payload = this.beerList.map((name, index) => (
        { 
          event_id: this.eventDetails.eventId,
          position: index+1, 
          name,
        }
      ))
      this.$store.dispatch('addBeersToCurrentEvent', payload)
      this.$store.dispatch('updateEventState', 'OPEN')
      const beers = this.beerList.map((name, index) => (
        {
          nr: index+1,
          name,
          checked: false
        }
      ))
      localStorage.setItem('beerList', JSON.stringify(beers))
    }
  },
  computed: {
    ...mapState(['eventDetails']),
  }
}
</script>