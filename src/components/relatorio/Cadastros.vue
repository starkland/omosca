<template>
  <m-table
    :data="cadastros"
    :type="tableType">
  </m-table>
</template>

<script>
import mTable from '../Table';

import Event from '../../assets/js/Event';
import ApiService from '../../assets/js/ApiService';

export default {
  name: 'Cadastros',

  data() {
    return {
      cadastros: [],
      tableType: 'cadastro',
    };
  },

  components: {
    mTable,
  },

  methods: {
    handleNews(obj) {
      const data = obj.data;

      if (data) {
        Object.keys(data).map(item => this.cadastros.push(data[item]));
      }
    },
  },

  created() {
    this.api = new ApiService();
  },

  mounted() {
    this.api.getAllNews();

    Event.$on('all_newsletter', this.handleNews);
  },

  beforeDestroy() {
    Event.$off('all_newsletter');
  },
};
</script>

<style scoped></style>
