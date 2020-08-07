<template>
  <v-card
    class="mx-auto"
    max-width="386"
    outlined
    elevation="4"
  >
    <v-card-title class="headline">AddEvent</v-card-title>
    <v-form
      class="pa-5"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="form.motto"
        label="Motto"
      ></v-text-field>

      <v-text-field
        v-model="form.description"
        label="Description"
      ></v-text-field>

      <v-text-field
        v-model="form.location"
        label="Location"
      ></v-text-field>

      <v-select
        v-model="form.host"
        :items="getUserList"
        item-text="userName"
        item-value="id"
        :rules="[v => !!v || 'Host is required']"
        label="Host"
        required
      ></v-select>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
        block
      >
        Ok
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    valid: true,
    form: {
      host: null,
      motto: '',
      description: '',
      location: ''
    },
  }),
  methods: {
    async validate () {
      this.$refs.form.validate()
      // console.log(this.form)
      await axios.post('/api/events', this.form, { headers: { 'X-Auth': this.getToken}})
    },
  },
  computed: {
    ...mapGetters(['getUserList', 'getToken'])
  }
}
</script>