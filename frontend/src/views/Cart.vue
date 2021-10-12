<template>
  <div id="cart-view" class="p-2 flex-grow flex flex-col">
    <CartCard
      class="bg-gray-300 rounded px-4 py-2 mb-4" 
      v-for="product in cartProducts"
      :cartProduct="product"
      :key="product.id"
    />
    <p v-if="!cartProducts.length">You haven't selected any products!</p>
    <div>

    </div>
    <div class="mt-auto flex" v-show="cartProducts.length">
      <div class="w-1/2">
        <h4 class="text-left text-lg font-semibold">Totals</h4>
      </div>
      <div class="w-1/2 mb-4">
        <p class="text-right">${{ totalEx }} ex.</p>
        <p class="text-right">+ ${{ totalGst }} GST</p>
        <hr class="w-32 my-3 ml-auto">
        <div class="text-right">${{ totalEx + totalGst }}</div>
      </div>
    </div>
    <router-link 
      tag="button" 
      :to="{ name: 'Checkout' }" 
      class="bg-blue-500 w-full h-12 rounded text-white font-semibold"
      v-show="cartProducts.length"
    >Go to checkout</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import CartCard from '@/components/CartCard';

export default {
  name: 'CartView',

  components: {
    CartCard,
  },
  
  computed: {
    ...mapGetters('purchasing', ['cartProducts']),

    totalEx() {
      return this.cartProducts.reduce((acc, cur) => acc + (cur.quantity * cur.exPrice), 0);
    },

    totalGst() {
      return this.cartProducts.reduce((acc, cur) => acc + (cur.quantity * cur.gstPrice), 0);
    },
  },
}
</script>