<template>
  <v-card 
    class="mx-auto"
    max-width="386"
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
        label="Beer"
        single-line
        solo
        >
      </v-text-field>
      <v-btn
      color="success"
      class="mr-4"
      @click="submit"
      >
        Ok
      </v-btn>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      event_id: 3,
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
          event_id: this.event_id,
          position: index+1, 
          name 
        }
      ))
      await axios.post('/api/beers', payload)
    }
  }
}
</script>