<template>
  <v-container class="pt-1" fluid grid-list-md>
    <h1 class="font-weight-regular mb-3">User Report</h1>
    <v-layout row wrap pa-1>
      <v-flex
        v-for="(report, index) in reports"
        :key="index"
        xs12
        sm6
        md4
      >
        <v-card>
          <v-card-title>
            <v-container ma-0 pa-0>
              <v-layout fill-height>
                <v-flex xs12>
                  <h2>{{report.subject}}</h2>
                </v-flex>
              </v-layout>
              <v-layout fill-height>
                <v-flex xs12>
                  <span class="grey--text">{{report.date}}</span>
                </v-flex>
              </v-layout>
              <v-layout fill-height>
                <v-flex xs12>
                  <span>{{report.description}}</span>
                </v-flex>
              </v-layout>
              <v-layout fill-height>
                <v-flex xs12>
                  <v-chip>From {{report.reportUser}} ({{report.reportUserEmail}})</v-chip>
                  <v-chip>To {{report.targetUser}} ({{report.targetUserEmail}})</v-chip>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="orange" @click="blockUser(index)">Block {{report.targetUser}}</v-btn>
            <v-btn flat color="orange" @click="dismiss(index)">Dismiss</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    reports: [
      {
        id: 1,
        reportUser: "Evan You",
        targetUser: "Kelvin Chan",
        date: "02 Mar 2019",
        reportUserEmail: "evanyou@gmail.com",
        targetUserEmail: "kelvinchan@gmail.com",
        subject: "Improvement on layout items",
        description: "The layout item can be larger which make the image easier to see."
      },
      {
        id: 2,
        reportUser: "John Doe",
        targetUser: "Mary Chan",
        date: "01 Mar 2019",
        reportUserEmail: "johndoe@gmail.com",
        targetUserEmail: "marychan@gmail.com",
        subject: "Notification Systems",
        description: "Develop notification alerts when someone comments"
      },
      {
        id: 3,
        reportUser: "Chris Wong",
        targetUser: "Jennifer Ma",
        date: "21 Feb 2019",
        reportUserEmail: "chriswong@gmail.com",
        targetUserEmail: "jenniferma@gmail.com",
        subject: "Dark Mode",
        description: "Please add dark mode feature, which is super cool!"
      }
    ]
  }),
  methods: {
    blockUser(index) {
      // TODO: block user
      this.reports.splice(index, 1);
    },
    dismiss(index) {
      this.reports.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>
