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
        :items="items"
        :rules="[v => !!v || 'Host is required']"
        label="Host"
        required
      ></v-select>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Ok
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    valid: true,
    form: {
      host: null,
      motto: '',
      description: '',
      location: ''
    },      
    items: [
      'Wasser',
      'Hopfen',
      'Malz',
      'Hefe',
    ],
    response: ''
  }),

  computed: {
    getUserId() {
      return this.$store.getters.getUserDetails.id
    }
  },
  methods: {
    async validate () {
      this.$refs.form.validate()
      this.form.host = this.getUserId
      await axios.post('/api/events', this.form)
    },
    reset () {
      this.$refs.form.reset()      
    },
  },
}
</script>