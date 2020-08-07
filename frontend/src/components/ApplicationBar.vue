<template>
  <v-app-bar app color="amber darken-2" dark dense>
    <v-app-bar-nav-icon>
      <v-icon>
        mdi-beer
      </v-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title>Hallo, {{getUserDetails.name}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on" @click="logout">mdi-logout</v-icon>
      </template>
      <span>Logout</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data:() => ({

  }),
  computed: {
    ...mapGetters(['getToken', 'getUserDetails'])
  },
  methods: {
    logout() {
      this.$store.commit('logout')
    }
  },
}
</script>