<template>
  <v-container class="pt-1" fluid>
    <h1 class="font-weight-regular mb-3">Feedback</h1>
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="subject"
        :error-messages="subjectErrors"
        label="Subject"
        required
        @input="$v.subject.$touch()"
        @blur="$v.subject.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="description"
        :error-messages="descriptionErrors"
        label="Description"
        required
        @input="$v.description.$touch()"
        @blur="$v.description.$touch()"
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
    name: { required },
    email: { required, email },
    description: { required },
    subject: { required },
  },
  data: () => ({
    name: "",
    email: "",
    description: "",
    subject: "",
  }),
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    descriptionErrors() {
      const errors = []
      if (!this.$v.description.$dirty) return errors
      !this.$v.description.required && errors.push('Description is required.')
      return errors
    },
    subjectErrors() {
      const errors = []
      if (!this.$v.subject.$dirty) return errors
      !this.$v.subject.required && errors.push('Subject is required.')
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
};
</script>

<style>
</style>
