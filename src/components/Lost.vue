<template>
  <v-container
    class="pt-1"
    fluid
    grid-list-md
  >
    <h1 class="font-weight-regular mb-3">Lost Items</h1>
    <v-layout row wrap>
      <v-flex
        v-for="item in lostItems"
        :key="item.id"
        xs12
        sm6
        md4
      >
        <v-card>
          <v-img
            :src="item.src"
            class="responsive"
          >
          </v-img>

          <v-card-title>
            <v-container ma-0 pa-0>
              <v-layout fill-height>
                <v-flex xs12>
                  <h2>{{item.name}}</h2>
                </v-flex>
              </v-layout>
              <v-layout fill-height>
                <v-flex xs12>
                  <span class="grey--text">{{item.date}}</span>
                </v-flex>
              </v-layout>
              <v-layout fill-height>
                <v-flex xs12>
                  <span>{{item.description}}</span>
                </v-flex>
              </v-layout>
              <v-layout fill-height>
                <v-flex xs12>
                  <v-chip>{{item.category}}</v-chip>
                  <v-chip>{{item.location}}</v-chip>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="orange" @click="toItemDetails(item)">Comments</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({

  }),
  methods: {
    toItemDetails(item) {
      this.$router.push(`/item/lost/${item.id}`);
    }
  },
  computed: {
    ...mapGetters(["lostItems"])
  }
};
</script>

<style scoped>
.responsive {
  height: 300px;
  width: auto;
}
</style>
