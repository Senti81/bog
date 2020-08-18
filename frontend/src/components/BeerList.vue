<template>
  <v-container flex>
    <v-card v-for="beer in beerList" :key="beer.position"
      width="100%"
      height="50"
      class="ma-2"
      elevation="4"
      >
      <v-card-text>
        {{beer.position}}. {{beer.name}}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['beerList'])
  },
  mounted() {
    this.$store.dispatch('loadBeerListForCurrentEvent')
  }
}
</script>