<template>
  <v-card>
    <v-card-title>
      Event List
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Suche"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="eventList"
      :search="search"
      class="elevation-1 mt-5"
    ></v-data-table>
    <AddEvent/>
  </v-card>
</template>

<script>
import AddEvent from '@/components/AddEvent'
import { mapState } from 'vuex'
export default {
  data:() => ({
    headers: [
      { text: 'Date', value: 'date', sortable: true },
      { text: 'Host', value: 'host', sortable: true },
      { text: 'Description', value: 'description', sortable: true },
      { text: 'Location', value: 'location', sortable: true },
      { text: 'Motto', value: 'motto', sortable: true },
      { text: 'State', value: 'state' },
    ],
    search: ''
  }),
  components: {
    AddEvent
  },
  computed: {
    ...mapState(['eventList'])
  }
}
</script>