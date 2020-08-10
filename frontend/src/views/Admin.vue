<template>
  <v-container fluid>
    <v-tabs center-active fixed-tabs v-model="tab" class="mx-auto">
      <v-tab>New Event</v-tab>
      <v-tab>Event List</v-tab>
      <v-tab>New User</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <AddEvent/>
      </v-tab-item>
      <v-tab-item>
        <EventList/>
      </v-tab-item>
      <v-tab-item>
        Add New User Component
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import AddEvent from '@/components/AddEvent'
import EventList from '@/components/EventList'
import { mapGetters } from 'vuex'

export default {
  data:() => ({
    tab: null,
  }),
  components: {
    AddEvent,
    EventList
  },
  computed: {
    ...mapGetters(['getUserDetails', 'getToken'])
  },
  mounted() {
    if (this.getUserDetails.role !== 'ADMIN')
      this.$router.push('/')
    else {
      this.$store.dispatch('loadUserList', this.getToken)
      this.$store.dispatch('loadEventList', this.getToken)
    }
  }
}
</script>