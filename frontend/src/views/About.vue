<template>
  <div id="about-view" class="p-4">
    <h1>This is an about page!</h1>
    <router-link tag="button" :to="{ name: 'Home'}" class="bg-blue-400 w-24 h-10 text-white font-semibold rounded mt-4">Go home</router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>
