import axios from 'axios';

const module = {
  namespaced: true,

  state: {
    cart: [],
  },

  getters: {
    cartProducts(state, g, rootState) {
      const cartIds = state.cart.map(p => p.id);
      return rootState.products.products
        .filter(p => cartIds.includes(p.id))
        .map(p => {
          const cartObj = state.cart.find(c => p.id === c.id);
          return {
            ...p,
            quantity: cartObj.quantity,
          };
        });
    },

    cartTotalEx(s, getters) {
      return getters.cartProducts.reduce((acc, cur) => acc += (cur.quantity * cur.exPrice), 0);
    },

    cartTotalGst(s, getters) {
      return getters.cartProducts.reduce((acc, cur) => acc += (cur.quantity * cur.gstPrice), 0);
    },
  },

  mutations: {
    setCart(state, cart) {
      state.cart = cart;
    },
  },

  actions: {
    updateCartProduct({ state, commit }, { productId, quantity }) {
      const cart = [...state.cart];

      const prodIndex = cart.findIndex(p => p.id === productId);

      if (prodIndex !== -1) {
        if (quantity) {
          cart[prodIndex].quantity = quantity; 
        } else {
          cart.splice(prodIndex, 1);
        }
      } else if (quantity) {
        cart.push({ id: productId, quantity });
      }

      commit('setCart', cart);
    },
    async purchase({commit}, checkoutDetails) {
      const {data} = await axios.post('', JSON.stringify(checkoutDetails));
      return data
    },
  },
};

export default module;