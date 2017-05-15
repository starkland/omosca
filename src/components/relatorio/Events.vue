<template>
  <m-table :data="events"></m-table>
</template>

<script>
import mTable from '../Table';

import Event from '../../assets/js/Event';
import ApiService from '../../assets/js/ApiService';

export default {
  name: 'Events',

  data() {
    return {
      events: [],
    };
  },

  components: {
    mTable,
  },

  methods: {
    handleEvents(obj) {
      const data = obj.data;

      if (data) {
        Object.keys(data).map(item => this.events.push(data[item]));
      }
    },
  },

  created() {
    this.api = new ApiService();
  },

  mounted() {
    this.api.getAllEvents();

    Event.$on('all_events', this.handleEvents);
  },

  beforeDestroy() {
    Event.$off('all_events');
  },
};
</script>

<style scoped></style>
