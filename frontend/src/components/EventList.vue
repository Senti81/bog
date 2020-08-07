<template>
  <v-card
    class="mx-auto"
    max-width="386"
    outlined
    elevation="4"
  >
    <v-card-title class="headline">EventList</v-card-title>
    <v-card-text>
      {{eventList}}
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    eventList: []
  }),
  computed: {
    ...mapGetters(['getToken'])
  },
  async created() {
    const result = await axios.get('/api/events', { headers: { 'X-Auth': this.getToken}})
    this.eventList = result.data
  },
}
</script>