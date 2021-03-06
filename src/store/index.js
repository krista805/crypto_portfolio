import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: []
  },
  mutations: {
    SET_COINS(state, response) {
      state.coins = response
    }
  },
  actions: {
    async fetchCrypto({ commit }) {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
        );
        commit("SET_COINS", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    getCrypto: (state) => {
      return state.coins
    }
  },
  modules: {
  },
})
