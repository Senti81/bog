<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="pink"
          dark
          small            
          absolute
          bottom
          right
          fab
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
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
          >
            Ok
          </v-btn>
          <v-btn color="error" @click="dialog = false">Cancel</v-btn>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    dialog: false,
    valid: true,
    form: {
      host: null,
      date: new Date().toISOString().substr(0, 10),
      motto: '',
      description: '',
      location: ''
    },
  }),
  methods: {
    async validate () {
      this.$refs.form.validate()
      this.$store.dispatch('addEvent', this.form)
      this.dialog = false
    },
  },
  computed: {
    ...mapGetters(['getUserList', 'getToken']),
  }
}
</script>