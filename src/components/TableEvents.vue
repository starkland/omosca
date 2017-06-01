<template>
  <div class="section">
    <div class="container">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Total</p>
            <p class="title">{{data.length}}</p>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </div>
      </nav>

      <table class="table">
        <thead>
          <tr>
            <th>Data / Hora</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
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
                @click="ViewEvent(item)">
                Visualizar
              </button>

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
  }

  .heading {
    margin-bottom: 30px;
  }

  button {
    display: inline-block;
    margin-bottom: 5px;
  }

  .title span {
    color: red;
  }

  .level {
    margin: 0 0 40px 0;
  }

  .level p {
    color: #89609E;
  }
</style>
