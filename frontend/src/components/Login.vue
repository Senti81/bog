<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-overlay v-show="this.$store.getters.isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="amber darken-2"
            dark
            flat
          >
            <v-toolbar-title>🍻 Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Login"
                name="login"
                prepend-icon="mdi-email"
                type="text"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="submit('admin@app.com', 'maus1234')">Admin Login</v-btn>
            <v-btn color="primary" @click="submit('user_a@app.com', 'maus1234')">User Login</v-btn>
            <v-btn color="primary" @click="submit">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length >= 6 || 'Name must be at least 6 characters',
    ],
  }),
  methods: {
    submit(email, password) {
      if (email)
        this.$store.dispatch('login', {email, password})
      else
        this.$store.dispatch('login', {email: this.email.trim(), password: this.password})
    },
    reset() {
      this.email = ''
      this.emailRules = []
      this.password = ''
      this.passwordRules = []
    }
  }
}
</script>