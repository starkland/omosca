<template>
  <div>
    <h1>{{ vm }}</h1>
  </div>
</template>

<script>
import ApiService from '../assets/js/ApiService';
import Event from '../assets/js/Event';

export default {
  name: 'EventInterno',

  data() {
    return {
      vm: '',
    };
  },

  mounted() {
    this.api = new ApiService();

    this.getEventDetails();

    Event.$on('event_details', this.handleEventDetails);
  },

  methods: {
    getEventDetails() {
      this.api.getEventById(this.route);
    },

    handleEventDetails(obj) {
      this.vm = obj;
    },
  },

  computed: {
    route() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped></style>
