import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lostItems: [
      {
        id: 1,
        name: "Macbook",
        category: "Electronic",
        location: "WKW Lobby",
        date: "02 Mar 2019",
        description: "Macbook pro 13 inch in space gray color",
        src: 'https://img.purch.com/o/aHR0cHM6Ly93d3cubGFwdG9wbWFnLmNvbS9pbWFnZXMvdXBsb2Fkcy80NzU4L2cvbWFjYm9vay0xMmluY2gtMDAzLmpwZw=='
      },
      {
        id: 2,
        name: "Pencil Case",
        category: "Stationary",
        location: "NS LT6",
        date: "12 Mar 2019",
        description: "A pencil case in gray color",
        src: "https://images-na.ssl-images-amazon.com/images/I/51uXvfMZE8L._SX425_.jpg"
      },
      {
        id: 3,
        name: "Water Bottle",
        category: "Water bottle",
        location: "NS McDonald's",
        date: "09 Mar 2019",
        description: "A water bottle in blue color",
        src: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/50/503/4231/500/10/258349780_258350410/258349780_1_720x928.jpg"
      },
      {
        id: 4,
        name: "Water Bottle",
        category: "Water bottle",
        location: "NS McDonald's",
        date: "09 Mar 2019",
        description: "A water bottle in blue color",
        src: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/50/503/4231/500/10/258349780_258350410/258349780_1_720x928.jpg"
      },
      {
        id: 5,
        name: "Macbook",
        category: "Electronic",
        location: "WKW Lobby",
        date: "02 Mar 2019",
        description: "Macbook pro 13 inch in space gray color",
        src: 'https://img.purch.com/o/aHR0cHM6Ly93d3cubGFwdG9wbWFnLmNvbS9pbWFnZXMvdXBsb2Fkcy80NzU4L2cvbWFjYm9vay0xMmluY2gtMDAzLmpwZw=='
      },
      {
        id: 6,
        name: "Pencil Case",
        category: "Stationary",
        location: "NS LT6",
        date: "12 Mar 2019",
        description: "A pencil case in gray color",
        src: "https://images-na.ssl-images-amazon.com/images/I/51uXvfMZE8L._SX425_.jpg"
      }
    ],
    foundItems: [
      {
        id: 1,
        name: "Pencil Case",
        category: "Stationary",
        location: "NS LT6",
        date: "12 Mar 2019",
        description: "A pencil case in gray color",
        src: "https://images-na.ssl-images-amazon.com/images/I/51uXvfMZE8L._SX425_.jpg"
      },
      {
        id: 2,
        name: "Water Bottle",
        category: "Water bottle",
        location: "NS McDonald's",
        date: "09 Mar 2019",
        description: "A water bottle in blue color",
        src: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/50/503/4231/500/10/258349780_258350410/258349780_1_720x928.jpg"
      },
      {
        id: 3,
        name: "Macbook",
        category: "Electronic",
        location: "WKW Lobby",
        date: "02 Mar 2019",
        description: "Macbook pro 13 inch in space gray color",
        src: 'https://img.purch.com/o/aHR0cHM6Ly93d3cubGFwdG9wbWFnLmNvbS9pbWFnZXMvdXBsb2Fkcy80NzU4L2cvbWFjYm9vay0xMmluY2gtMDAzLmpwZw=='
      },
      {
        id: 4,
        name: "Water Bottle",
        category: "Water bottle",
        location: "NS McDonald's",
        date: "09 Mar 2019",
        description: "A water bottle in blue color",
        src: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/50/503/4231/500/10/258349780_258350410/258349780_1_720x928.jpg"
      },
      {
        id: 5,
        name: "Macbook",
        category: "Electronic",
        location: "WKW Lobby",
        date: "02 Mar 2019",
        description: "Macbook pro 13 inch in space gray color",
        src: 'https://img.purch.com/o/aHR0cHM6Ly93d3cubGFwdG9wbWFnLmNvbS9pbWFnZXMvdXBsb2Fkcy80NzU4L2cvbWFjYm9vay0xMmluY2gtMDAzLmpwZw=='
      },
      {
        id: 6,
        name: "Pencil Case",
        category: "Stationary",
        location: "NS LT6",
        date: "12 Mar 2019",
        description: "A pencil case in gray color",
        src: "https://images-na.ssl-images-amazon.com/images/I/51uXvfMZE8L._SX425_.jpg"
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    lostItems: state => state.lostItems,
    lostItemsWithId: state => itemId => state.lostItems.filter(item => item.id == itemId),
    foundItems: state => state.foundItems,
    foundItemsWithId: state => itemId => state.foundItems.filter(item => item.id == itemId),
  }
})
