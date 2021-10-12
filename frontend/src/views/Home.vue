<template>
  <div id="home-view" class="p-2 flex-grow flex flex-col">
    <ProductList class="bg-gray-300 rounded px-4 py-2 mb-4"/>
    <router-link 
      tag="button" 
      :to="{ name: 'Cart' }" 
      class="bg-blue-500 w-full h-12 rounded text-white font-semibold mt-auto"
      v-show="cartHasProducts"
    >Go to cart</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'HomeView',
  
  components: {
    ProductList,
  },

  computed: {
    cartHasProducts() {
      return !!this.$store.state.purchasing.cart.length
    },
  },
};
</script>
