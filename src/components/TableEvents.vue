<template>
  <div class="section">
    <table class="table">
      <thead>
        <tr>
          <th>Data / Hora</th>
          <th>Nome</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in orderedEvents">
          <td>
            {{item.date_hour | moment("DD/MM/YYYY")}}
            {{item.date_hour | moment("hh:mm")}}
          </td>

          <td>{{item.name}}</td>

          <td>
            <a>{{item.email}}</a>
          </td>

          <td>
            <button class="button is-dark"
              title="Visualizar"
              @click="ViewEvent(item)">
              <span class="icon">
                <i class="fa fa-info-circle"></i>
              </span>
            </button>

            <button class="button is-primary"
              title="Editar"
              @click="editEvent(item)">
              <span class="icon">
                <i class="fa fa-pencil"></i>
              </span>
            </button>

            <button class="button is-danger"
              title="Excluir"
              @click="removeEvent(item)">
              <span class="icon">
                <i class="fa fa-trash-o"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <m-modal></m-modal>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

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

  computed: {
    orderedEvents() {
      return _.orderBy(this.$props.data, 'date_hour');
    },
  },

  methods: {
    editEvent(itemObj) {
      Event.$emit('edit_event', itemObj);
    },

    removeEvent(itemObj) {
      Event.$emit('remove_event', itemObj);
    },

    ViewEvent(itemObj) {
      this.$router.push(`/evento/${itemObj.created_at}`);
    },
  },
};
</script>

<style scoped>
  .section {
    min-height: 400px;
    padding-top: 0;
  }

  .heading {
    margin-bottom: 30px;
  }

  button {
    display: inline-block;
    width: 30%;
    margin-bottom: 5px;
  }
</style>
