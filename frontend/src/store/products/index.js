import Vue from 'vue';

import axios from '@/axios';

const module = {
  namespaced: true,

  state: {
    products: []
  },

  getters: {
  
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },

  actions: {
    async getProducts({ commit }) {
      try {
        const { data } = await axios.get('products');  

        commit('setProducts', data || []);
      } catch (error) {
        console.error(error);
        Vue.toasted.error('An error occured fetching products. Please try again or contact support.');
      }
    },
  },
};

export default module;