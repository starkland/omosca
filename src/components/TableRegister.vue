<template>
  <div class="section">
    <table class="table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in data">
          <td>
            {{item.created_at | moment("DD/MM/YYYY")}}
          </td>

          <td>
            <a>{{item.email}}</a>
          </td>

          <td>
            <button class="button is-danger"
              @click="removeEmail(item)">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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

  methods: {
    removeEmail(obj) {
      Event.$emit('remove_newsletter', obj);
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
</style>
