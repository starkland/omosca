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

// Assets
import Event from './assets/js/Event';
import ApiService from './assets/js/ApiService';

export default {
  name: 'app',

  components: {
    mNavbar,
    mFooter,
  },

  methods: {
    handleNewsletter(email) {
      const obj = {
        email,
        created_at: new Date().getTime(),
      };

      this.api.addNews(obj);
    },
  },

  created() {
    this.api = new ApiService();
    this.api.update();
  },

  mounted() {
    Event.$on('newsletter', this.handleNewsletter);
  },

  beforeDestroy() {
    Event.$off('newsletter');
  },
};
</script>

<style scoped>
#app {
  height: 100%;
}
</style>
