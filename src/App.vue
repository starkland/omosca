<template>
  <div id="app">
    <m-navbar></m-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import mNavbar from '@/components/Navbar';

export default {
  name: 'app',

  components: {
    mNavbar,
  },


};
</script>

<style scoped>
</style>
