<template>
  <v-container class="pt-1" fluid grid-list-md>
    <h1 class="font-weight-regular mb-3">{{item.name}}</h1>
    <v-layout row wrap>
      <v-flex shrink pr-4 pb-4>
        <v-img :src="item.src" class="responsive"></v-img>
      </v-flex>
      <v-flex grow class="justify-content: start;">
        <p class="subheading">{{item.date}}</p>
        <v-chip>{{item.location}}</v-chip>
        <v-chip>{{item.category}}</v-chip>
        <br><br><hr><br>
        <p class="body-1">{{item.description}}</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap pa-1>
      <v-flex>
        <h2 class="font-weight-regular">Comments</h2>
        <br>
        <v-list-tile class="grow">
          <v-list-tile-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            ></v-img>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Evan You &nbsp;<span class="grey--text">02 Mar 2019</span></v-list-tile-title>
            <v-list-tile-sub-title>If this item belongs to anyone, please call +65 12345678.</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-flex>
    </v-layout>
    <v-layout row wrap pa-2 mt-2>
      <v-flex>
        <h2 class="font-weight-regular mb-3">Leave Your Comment</h2>
        <form>
          <v-text-field
            outline
            v-model="name"
            :error-messages="nameErrors"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-textarea
            outline
            v-model="comment"
            :error-messages="commentErrors"
            label="Comment"
            required
            @input="$v.comment.$touch()"
            @blur="$v.comment.$touch()"
          ></v-textarea>
          <v-btn @click="submit" small>submit</v-btn>
          <v-btn @click="clear" small>clear</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  validations: {
    name: { required },
    comment: { required },
  },
  data: () => ({
    name: "",
    comment: "",
  }),
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
      this.comment = "";
    },
  },
  computed: {
    item() {
      const itemStatus = this.$route.params.lost_or_found;
      const itemId = this.$route.params.itemId;
      if (itemStatus == "lost") {
        return this.$store.getters.lostItemsWithId(itemId)[0];
      } else {
        return this.$store.getters.foundItemsWithId(itemId)[0];
      }
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    commentErrors() {
      const errors = []
      if (!this.$v.comment.$dirty) return errors
      !this.$v.comment.required && errors.push('Comment is required.')
      return errors
    },
  }
}
</script>

<style scoped>
.responsive {
  width: 300px;
  height: auto;
  border-radius: 15px;
  box-shadow: 3px 3px 3px gray;
}
</style>
