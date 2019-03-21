<template>
  <v-container class="pt-1" fluid grid-list-md>
    <h1 class="font-weight-regular mb-3">All Feedback</h1>
    <v-layout row wrap pa-1>
      <v-flex>
        <v-list two-line class="admin-feedback">
          <v-list-tile
            class="grow mb-2" 
            v-for="(item, index) in feedback" 
            :key="index"
            @click="deleteFeedback"
          >
            <v-list-tile-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              ></v-img>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{item.name}} &nbsp;<span class="grey--text">({{item.email}}) {{item.date}}</span></v-list-tile-title>
              <v-list-tile-sub-title>
                Subject: {{item.subject}}
              </v-list-tile-sub-title>
              <v-list-tile-sub-title>
                {{item.description}}
              </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>
                delete
              </v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    feedback: [
      {
        id: 1,
        name: "Evan You",
        date: "02 Mar 2019",
        email: "evanyou@gmail.com",
        subject: "Improvement on layout items",
        description: "The layout item can be larger which make the image easier to see."
      },
      {
        id: 2,
        name: "Kelvin Chan",
        date: "01 Mar 2019",
        email: "kelvinchan@gmail.com",
        subject: "Notification Systems",
        description: "Develop notification alerts when someone comments"
      },
      {
        id: 3,
        name: "Jason Ng",
        date: "21 Feb 2019",
        email: "jasonng@gmail.com",
        subject: "Dark Mode",
        description: "Please add dark mode feature, which is super cool!"
      }
    ]
  }),
  methods: {
    deleteFeedback(index) {
      this.feedback.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.admin-feedback {
  background-color: transparent;
}
</style>
