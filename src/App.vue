<template>
  <v-app id="keep">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
    >
      <v-list
        dense
        class="grey lighten-4 mt-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          ></v-divider>
          <v-list-tile
            v-else
            :key="i"
            @click="mapPage(item.text)"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="amber" app clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Lost&nbsp;<span class="font-weight-light">and</span>&nbsp;Found</span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <v-layout justify-center>
          <v-flex grow>
          <!-- <v-flex shrink> -->
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: "announcement", text: "Announcement" },
      { icon: "remove_shopping_cart", text: "Lost" },
      { icon: "add_shopping_cart", text: "Found" },
      { divider: true },
      { icon: "lock_open", text: "Sign In" },
      { icon: "person_add", text: "Sign Up" },
      { icon: "lock", text: "Sign Out" },
      { divider: true },
      { icon: "feedback", text: "Feedback" },
      { divider: true },
      { icon: "feedback", text: "All Feedback" },
      { icon: "assignment", text: "User Reports" },
      { icon: "block", text: "Blacklisted Users" },
      // { heading: 'Labels' },
      // { icon: 'add', text: 'Create new label' },
      // { divider: true },
      // { icon: 'archive', text: 'Archive' },
      // { icon: 'delete', text: 'Trash' },
      // { divider: true },
      // { icon: 'settings', text: 'Settings' },
      // { icon: 'chat_bubble', text: 'Trash' },
      // { icon: 'help', text: 'Help' },
      // { icon: 'phonelink', text: 'App downloads' },
      // { icon: 'keyboard', text: 'Keyboard shortcuts' }
    ]
  }),
  methods: {
    mapPage(pageName) {
      switch (pageName) {
        case "Announcement":
          this.$router.push("/");
          break;
        case "Lost":
          this.$router.push("/lost");
          break;
        case "Found":
          this.$router.push("/found");
          break;
        case "Sign In":
          this.$router.push("/signin");
          break;
        case "Sign Up":
          this.$router.push("/signup");
          break;
        case "Feedback":
          this.$router.push("/feedback");
          break;
        case "All Feedback":
          this.$router.push("/admin_feedback");
          break;
        case "User Reports":
          this.$router.push("/admin_userreport");
          break;
        case "Blacklisted Users":
          this.$router.push("/admin_blacklisteduser");
          break;
      }
    }
  },
  props: {
    source: String
  }
};
</script>

<style lang="stylus">
#keep {
  .v-navigation-drawer__border {
    display: none;
  }
}
</style>