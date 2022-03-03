<template>
  <div id="checkout-layout" class="min-h-screen flex flex-col">
    <img alt="Vue logo" class="mx-auto" src="../assets/logo.png">
    <div id="menu-wrapper" class="p-2">
      <Menu/>
    </div>
    <h2 class="text-3xl">Checkout</h2>
    <div id="main-wrapper" class="flex-grow flex flex-col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu';

export default {
  name: 'CheckoutLayout',

  components: {
    Menu,
  },
}
</script>