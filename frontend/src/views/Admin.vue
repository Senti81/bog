<template>
  <v-container fluid>
    <h1>Admin Component</h1>
    <AddEvent/>
  </v-container>
</template>

<script>
import AddEvent from '@/components/AddEvent'
import { mapGetters } from 'vuex'

export default {
  components: {
    AddEvent
  },
  computed: {
    ...mapGetters(['getUserDetails'])
  },
  mounted() {
    if (this.getUserDetails.role !== 'ADMIN')
      this.$router.push('/')
  }
}
</script>