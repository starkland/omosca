<template>
  <div class="section">
    <div class="container" v-if="type == 'eventos'">
      <div class="heading">
        <h1 class="title">
          Total de eventos: {{data.length}}
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
          <tr v-for="item in data">
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

    <div class="container" v-if="type == 'cadastros'">
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

    type: {
      type: String,
    },
  },

  data() {
    return {
      eventsData: [],
    };
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
