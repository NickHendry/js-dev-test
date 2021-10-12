<template>
  <div id="menu" class="bg-gray-200 rounded p-2 px-12 flex justify-around">
    <router-link :to="{ name: 'Home' }" class="font-semibold font-grey-600" active-class="font-grey-200">Home</router-link>
    <router-link :to="{ name: 'Cart' }" class="font-semibold font-grey-600" active-class="font-grey-200">Cart</router-link>
    <router-link :to="{ name: 'About' }" class="font-semibold font-grey-600" active-class="font-grey-200">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>