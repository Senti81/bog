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
export default {
  data: () => ({
    eventList: []
  }),
  async created() {
    const result = await axios.get('/api/events')
    this.eventList = result.data
  },
}
</script>