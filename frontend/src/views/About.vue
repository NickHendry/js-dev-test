<template>
  <div id="about-view" class="p-4 flex flex-col items-center">
    <h1 class="text-2xl font-bold">Simple Ecommerce Website</h1>
    <div class="rounded-md w-1/2 shadow-md mt-5">
      <h3 class="font-bold text-md">About this Site</h3>
      <p>This site provides a convenient way to shop for your favourite shapes!</p>
    </div>
    <div class="rounded-md w-1/2 shadow-md mt-10">
      <h3 class="font-bold text-md">Contact Us</h3>
      <p>4 Banksia Street</p>
      <p>Emu Plains</p>
      <p>Penrith, Sydney</p>
      <p>NSW 2750</p>
      <p>Ph: 0437 541 323</p>
      <p>Email: villageco@gmail.com</p>
    </div>
    <router-link tag="button" :to="{ name: 'Home'}" class="bg-blue-400 w-24 h-10 text-white font-semibold rounded mt-4">Go home</router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>