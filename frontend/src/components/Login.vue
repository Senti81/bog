<template>
  <v-card
    class="mx-auto"
    max-width="386"
    outlined
    elevation="4"
  >
    <v-card-title class="headline">Login</v-card-title>
    <v-form
      class="pa-5"
      ref="form"
      lazy-validation
    >
      <v-select
        v-model="selectedItem"
        :items="getUserList"
        label="Host"
        required
      ></v-select>
      <v-btn
        color="success"
        class="mr-4"
        @click="login"
      >
        Ok
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    selectedItem: ''
  }),
  computed: {
    ...mapGetters(['getUsers']),
    getUserList() {
      return this.getUsers.map(user => user.userName)
    }
  },
  methods: {
    login() {
      this.$store.commit('setLoggedInUser', this.item)
    }
  }
}
</script>