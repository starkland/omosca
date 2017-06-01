<template>
  <m-table
    :data="cadastros">
  </m-table>
</template>

<script>
import mTable from '../TableRegister';

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
        this.cadastros = [];
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
