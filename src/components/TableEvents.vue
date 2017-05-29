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
            <th>Data / Hora</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Link</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in data">
            <td>
              {{item.date_hour | moment("DD/MM/YYYY")}}
              {{item.date_hour | moment("hh:mm")}}
            </td>

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

    <div class="container">
      <m-modal></m-modal>
    </div>
  </div>
</template>

<script>
import Event from '../assets/js/Event';
import mModal from './Modal';

export default {
  name: 'Table',

  props: {
    data: {
      type: Array,
    },
  },

  components: {
    mModal,
  },

  data() {
    return {};
  },

  methods: {
    editEvent(itemObj) {
      Event.$emit('edit_event', itemObj);
    },

    removeEvent(itemObj) {
      Event.$emit('remove_event', itemObj);
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
