<template>
  <v-container class="pt-1" fluid grid-list-md>
    <h1 class="font-weight-regular mb-3">Blacklisted User</h1>
    <v-layout row wrap pa-1>
      <v-flex>
        <v-list class="blocked-user">
          <v-list-tile
            class="grow mb-2" 
            v-for="(user, index) in blacklistedUsers" 
            :key="index"
            @click="unblockUser"
          >
            <v-list-tile-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              ></v-img>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{user.name}} &nbsp;<span class="grey--text">({{user.email}})</span></v-list-tile-title>
              <v-list-tile-sub-title>
                Reason: {{user.reason}}
              </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>
                undo
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
    blacklistedUsers: [
      {
        id: 1,
        name: "Evan You",
        email: "evanyou@gmail.com",
        reason: "aaa"
      },
      {
        id: 2,
        name: "Kelvin Chan",
        email: "kelvinchan@gmail.com",
        reason: "bbb"
      },
      {
        id: 3,
        name: "Jason Ng",
        email: "jasonng@gmail.com",
        reason: "ccc"
      }
    ]
  }),
  methods: {
    unblockUser(index) {
      this.blacklistedUsers.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.blocked-user {
  background-color: transparent;
}
</style>
