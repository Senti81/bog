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
      :items="userList"
      :search="search"
      class="elevation-1 mt-5"
    ></v-data-table>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data:() => ({
    headers: [
      { text: 'Name', value: 'userName', sortable: true },
      { text: 'Email', value: 'email', sortable: true },
      { text: 'Role', value: 'role', sortable: true },
      { text: 'Created', value: 'created_at', sortable: true },
    ],
    search: ''
  }),
  computed: {
    ...mapState(['userList']),
  }
}
</script>