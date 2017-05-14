<template>
  <div id="app">
    <m-navbar></m-navbar>
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mNavbar from '@/components/Navbar';
import mFooter from '@/components/Footer';

export default {
  name: 'app',

  components: {
    mNavbar,
    mFooter,
  },

};
</script>

<style scoped>
#app {
  height: 100%;
}
</style>
