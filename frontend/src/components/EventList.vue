<template>
  <v-data-table
    :headers="headers"
    :items="getEventList"
    class="elevation-1 mb-8"
  ></v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data:() => ({
    headers: [
        { text: 'Date', value: 'created_at' },
        { text: 'Description', value: 'description' },
        { text: 'Host', value: 'host' },
        { text: 'Location', value: 'location' },
        { text: 'Motto', value: 'motto' },
      ]
  }),
  computed: {
    ...mapGetters(['getEventList'])
  }
}
</script>