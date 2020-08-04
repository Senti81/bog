<template>
  <v-app>
    <v-card class="d-flex flex-wrap py-3">
      <AddEvent/>
      <EventList/>
      <AddBeers/>
    </v-card>
  </v-app>
</template>

<script>
import AddEvent from './components/AddEvent';
import EventList from './components/EventList';
import AddBeers from './components/AddBeers';

export default {
  name: 'App',
  components: {
    AddEvent,
    EventList,
    AddBeers
  },

  data: () => ({
    //
  }),
};
</script>
