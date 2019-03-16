<template>
  <v-container class="pt-1" fluid>
    <h1 class="font-weight-regular mb-3">Sign In</h1>
    <form>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="Email"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'visibility' : 'visibility_off'"
        :type="show1 ? 'text' : 'password'"
        :error-messages="passwordErrors"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
        @click:append="show1 = !show1"
      ></v-text-field>
      <br>
      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-container>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  validations: {
    email: { required, email },
    password: { required },
  },
  data: () => ({
    email: "",
    password: "",
    show1: false,
  }),
  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      return errors
    },
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$anyError) {
        // Submit form
        console.log("form submitted");
      }
    },
    clear () {
      this.$v.$reset()
      this.name = "";
      this.email = "";
      this.subject = "";
      this.description = "";
    },
  }
}
</script>

<style scoped>

</style>
