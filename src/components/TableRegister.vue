<template>
  <div class="section">
    <div class="container">
      <div class="heading">
        <h1 class="title">
          Total de cadastros: {{data.length}}
        </h1>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in data">
            <td>{{new Date(item.created_at)}}</td>
            <td><a>{{item.email}}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',

  props: {
    data: {
      type: Array,
    },
  },

  data() {
    return {};
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
