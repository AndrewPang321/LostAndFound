<template>
  <v-container class="pt-1" fluid>
    <h1 class="font-weight-regular mb-3">Sign Up</h1>
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
      <v-text-field
        v-model="confirmPassword"
        :append-icon="show2 ? 'visibility' : 'visibility_off'"
        :type="show2 ? 'text' : 'password'"
        :error-messages="confirmPasswordErrors"
        label="Confirm Password"
        required
        @input="$v.confirmPassword.$touch()"
        @blur="$v.confirmPassword.$touch()"
        @click:append="show2 = !show2"
      ></v-text-field>
      <br>
      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-container>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
    confirmPassword: { required, sameAsPassword: sameAs("password") }
  },
  data: () => ({
    email: "",
    password: "",
    confirmPassword: "",
    show1: false,
    show2: false,
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
      !this.$v.password.minLength && errors.push('Password must be at least 8 characters long')
      return errors
    },
    confirmPasswordErrors() {
      const errors = []
      if (!this.$v.confirmPassword.$dirty) return errors
      !this.$v.confirmPassword.required && errors.push('Confirm your password is required')
      !this.$v.confirmPassword.sameAsPassword && errors.push('Password is not the same')
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
