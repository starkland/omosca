<template>
  <div class="section">
    <div class="container">
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
            <th>Ações</th>
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
            <td>
              <button class="button is-primary"
                @click="editEvent(item)">
                Editar
              </button>

              <button class="button is-danger"
                @click="removeEvent(item)">
                Excluir
              </button>
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

  methods: {
    editEvent(itemObj) {
      console.warn('Editar evento..', itemObj);
    },

    removeEvent(itemObj) {
      console.info('Remover evento..', itemObj);
    },
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

  button {
    margin-bottom: 5px;
  }
</style>
