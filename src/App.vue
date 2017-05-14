<template>
  <div id="app">
    <m-navbar></m-navbar>
    <m-subheader></m-subheader>
    <router-view></router-view>
  </div>
</template>

<script>
import mNavbar from '@/components/Navbar';
import mSubheader from '@/components/Subheader';

export default {
  name: 'app',

  components: {
    mNavbar,
    mSubheader,
  },

};
</script>

<style scoped>
</style>
