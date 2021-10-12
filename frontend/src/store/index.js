import Vue from 'vue';
import Vuex from 'vuex';

import root from './root';
import products from './products';
import purchasing from './purchasing';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    purchasing,
  },

  ...root,
})
