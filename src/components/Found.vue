<template>
  <v-container
    class="pt-1"
    fluid
    grid-list-md
  >
    <h1 class="font-weight-regular mb-3">Found Items</h1>
    <v-layout row wrap>
      <v-flex
        v-for="(item, index) in items"
        :key="index"
        xs4
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
            <v-btn flat color="orange">This is mine</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Pencil Case",
        category: "Stationary",
        location: "NS LT6",
        date: "12 Mar 2019",
        description: "A pencil case in gray color",
        src: "https://images-na.ssl-images-amazon.com/images/I/51uXvfMZE8L._SX425_.jpg"
      },
      {
        name: "Water Bottle",
        category: "Water bottle",
        location: "NS McDonald's",
        date: "09 Mar 2019",
        description: "A water bottle in blue color",
        src: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/50/503/4231/500/10/258349780_258350410/258349780_1_720x928.jpg"
      },
      {
        name: "Macbook",
        category: "Electronic",
        location: "WKW Lobby",
        date: "02 Mar 2019",
        description: "Macbook pro 13 inch in space gray color",
        src: 'https://img.purch.com/o/aHR0cHM6Ly93d3cubGFwdG9wbWFnLmNvbS9pbWFnZXMvdXBsb2Fkcy80NzU4L2cvbWFjYm9vay0xMmluY2gtMDAzLmpwZw=='
      },
      {
        name: "Water Bottle",
        category: "Water bottle",
        location: "NS McDonald's",
        date: "09 Mar 2019",
        description: "A water bottle in blue color",
        src: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/50/503/4231/500/10/258349780_258350410/258349780_1_720x928.jpg"
      },
      {
        name: "Macbook",
        category: "Electronic",
        location: "WKW Lobby",
        date: "02 Mar 2019",
        description: "Macbook pro 13 inch in space gray color",
        src: 'https://img.purch.com/o/aHR0cHM6Ly93d3cubGFwdG9wbWFnLmNvbS9pbWFnZXMvdXBsb2Fkcy80NzU4L2cvbWFjYm9vay0xMmluY2gtMDAzLmpwZw=='
      },
      {
        name: "Pencil Case",
        category: "Stationary",
        location: "NS LT6",
        date: "12 Mar 2019",
        description: "A pencil case in gray color",
        src: "https://images-na.ssl-images-amazon.com/images/I/51uXvfMZE8L._SX425_.jpg"
      },
    ]
  })
};
</script>

<style>
.responsive {
  height: 300px;
  width: auto;
}
</style>
