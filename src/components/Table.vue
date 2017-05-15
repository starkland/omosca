<template>
  <div class="section">
    <div class="container">
      <div class="heading">
        <h1 class="title">
          Total de eventos: {{tableData.length}}
        </h1>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Link</th>
            <th>Descrição</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in tableData">
            <td>{{new Date(item.created_at)}}</td>
            <td>{{item.name}}</td>
            <td><a>{{item.email}}</a>
            </td>
            <td>
              <a :href="item.link" target="_blank">
                {{item.link}}
              </a>
            </td>
            <td>{{item.description}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ApiService from '../assets/js/ApiService';
import Event from '../assets/js/Event';

export default {
  name: 'Table',

  data() {
    return {
      tableData: [],
    };
  },

  methods: {
    handleEvents(obj) {
      const data = obj.data;

      if (data) {
        Object.keys(data).map(item => this.tableData.push(data[item]));
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

<style scoped>
  .section {
    min-height: 400px;
  }

  .heading {
    margin-bottom: 30px;
  }
</style>
