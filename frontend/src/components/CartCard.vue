<template>
  <div class="cart-card">
    <div class="flex">
      <p>{{ cartProduct.name }}</p>
      <p class="ml-auto font-semibold">${{ price }}</p>
    </div>
    <div class="flex justify-between mt-4">
      <button class="bg-white rounded w-10 h-10" @click="minusClicked">-</button>
      <p>{{ cartProduct.quantity }}</p>
      <button class="bg-white rounded w-10 h-10" @click="plusClicked">+</button>
    </div>
  </div>
</template>

<script>
import displaysProductsMixin from '@/mixins/displaysProducts.mixin';

export default {
  name: 'CartCard',

  mixins: [displaysProductsMixin],

  props: {
    cartProduct: {
      type: Object,
      required: true,
    },
  },

  computed: {
    price() {
      return ((this.calcProductPrice(this.cartProduct) * 100 * this.cartProduct.quantity) / 100).toFixed(2);
    },
  },

  methods: {
    plusClicked() {
      const newObj = {
        productId: this.cartProduct.id,
        quantity: this.cartProduct.quantity + 1,
      }
      this.$store.dispatch('purchasing/updateCartProduct', newObj);
    },

    minusClicked() {
      const newObj = {
        productId: this.cartProduct.id,
        quantity: this.cartProduct.quantity - 1,
      }
      this.$store.dispatch('purchasing/updateCartProduct', newObj);
    },
  },
};
</script>