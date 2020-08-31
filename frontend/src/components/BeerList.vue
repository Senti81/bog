<template>
  <v-container flex>
    <v-card v-for="beer in beerList" :key="beer.nr"
      width="100%"
      height="50"
      class="ma-2"
      elevation="4"
      :dark="beer.checked"
      @click="toggle(beer)"
      >
      <v-card-text>
        {{beer.nr}}. {{beer.name}}
      </v-card-text>
    </v-card>
    <v-btn
      block
      color="primary"
      class="mr-4"
      @click="close"
    >
      Close
    </v-btn>
    <v-btn
      block
      color="primary"
      class="mr-4"
      @click="finish"
    >
      Finish
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    beerList: []
  }),
  methods: {
    toggle(beer) {
      beer.checked = !beer.checked
      localStorage.setItem('beerList', JSON.stringify(this.beerList))
    },
    close() {
      this.$store.dispatch('updateEventState', 'CLOSED')
    },
    finish() {
      this.$store.dispatch('updateEventState', 'FINISHED')
      localStorage.removeItem('beerList')
      localStorage.removeItem('eventDetails')
      this.$router.push('/')
    }
  },
  created() {
    this.beerList = JSON.parse(localStorage.getItem('beerList'))
  }
}
</script>