<template>
  <v-container fluid>
    <v-tabs center-active fixed-tabs v-model="tab" class="mx-auto">
      <v-tab>Events</v-tab>
      <v-tab>Users</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <EventList/>
      </v-tab-item>
      <v-tab-item>
        <UserList/>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import EventList from '@/components/EventList'
import UserList from '@/components/UserList'
import { mapGetters } from 'vuex'

export default {
  data:() => ({
    tab: null,
  }),
  components: {
    EventList,
    UserList
  },
  computed: {
    ...mapGetters(['getUserDetails', 'getToken'])
  },
  mounted() {
    if (this.getUserDetails.role !== 'ADMIN')
      this.$router.push('/')
    else {
      this.$store.dispatch('loadUserList')
      this.$store.dispatch('loadEventList')
    }
  }
}
</script>