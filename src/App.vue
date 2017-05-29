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

    handleSubmitForm(obj) {
      const formObj = {
        description: obj.description,
        email: obj.email,
        link: obj.link,
        name: obj.name,
        date_hour: obj.date,
        place: obj.place,
        created_at: new Date().getTime(),
      };

      this.api.addEvent(formObj);
    },
  },

  created() {
    this.api = new ApiService();
    this.api.init();

    this.api.newsUpdate();
    this.api.eventUpdate();
  },

  mounted() {
    Event.$on('newsletter', this.handleNewsletter);
    Event.$on('submit_form', this.handleSubmitForm);
  },

  beforeDestroy() {
    Event.$off('newsletter');
    Event.$off('submit_form');
  },
};
</script>

<style scoped>
#app {
  height: 100%;
}
</style>
