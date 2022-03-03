<template>
  <div class="product-list">
    <div class="list-wrapper"  v-show="!loading && products.length">
      <p class="font-medium">Click to add to cart</p>
      <div 
        class="product bg-white my-2 p-2 rounded flex" 
        :class="{ 'bg-green-200': inCart(product) }"
        v-for="product in products" :key="product.id" 
        @click="productClicked(product)"
      >
        <p class="font-semibold">{{ product.name }}</p>
        <p class="ml-auto">${{ calcProductPrice(product).toFixed(2) }}</p>
      </div>
    </div>
    <div class="no-products-wrapper" v-show="!loading && !products.length">
      <p>There are no products currently available ☹️</p>
    </div>
    <div class="loading-wrapper" v-show="loading">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import displaysProductsMixin from '@/mixins/displaysProducts.mixin';

export default {
  name: 'ProductList',

  mixins: [ displaysProductsMixin ],

  computed: {
    ...mapState('products', ['products']),
  },

  data() {
    return {
      loading: false,
    };
  },

  methods: {
    async getProducts() {
      this.loading = true;
      await this.$store.dispatch('products/getProducts');
      this.loading = false;
    },

    // Used for product highlighting 
    inCart(product) {
      return this.$store.state.purchasing.cart.some(p => p.id === product.id);
    },

    productClicked(product) {     
      if (this.inCart(product)) {
        this.$store.dispatch('purchasing/updateCartProduct', { productId: product.id, quantity: 0 });
      } else {
        this.$store.dispatch('purchasing/updateCartProduct', { productId: product.id, quantity: 1 });
      }
    }
  },

  created() {
    this.getProducts();
  },
}
</script>