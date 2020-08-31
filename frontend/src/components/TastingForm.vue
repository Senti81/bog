<template>
  <v-container flex>
    <v-rating v-for="beer in beerList" :key="beer.id"
      @input="addRating($event, beer)"
      :value="beer.rating"
    >
    </v-rating>
    <v-btn
      block
      color="success"
      class="mr-4"
      @click="submitTasting"
      >
        Submit
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    beerList: []
  }),
  methods: {
    addRating(value, beer) {
      beer.rating = value
      localStorage.setItem('beerList', JSON.stringify(this.beerList))
    },
    submitTasting() {
      const tastings = JSON.parse(localStorage.getItem('beerList'))
      this.$store.dispatch('submitTasting', tastings)
      localStorage.removeItem('beerList')
      this.$store.commit('finishTasting')
      this.$router.push('/')
    }
  },
  created() {
    this.beerList = JSON.parse(localStorage.getItem('beerList'))
  }
}
</script>