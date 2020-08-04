<template>
  <v-app>
    <v-card class="d-flex flex-wrap py-3">
      <Login/>
      <AddEvent/>
      <EventList/>
    </v-card>
  </v-app>
</template>

<script>
import AddEvent from './components/AddEvent';
import EventList from './components/EventList';
import Login from './components/Login'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Login,
    AddEvent,
    EventList,
  },
  computed: {
    ...mapActions(['setUsers']),
  },
  mounted() {
    this.setUsers
  }
};
</script>
