<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="data.photoURL" :alt="data.name">
          </figure>
        </div>

        <div class="media-content">
          <p class="title is-4">{{data.name}}</p>
          <p class="subtitle is-6">
            <a :title="data.email">{{data.email}}</a>
          </p>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <a class="card-footer-item" @click="logout">
        Sair
      </a>
    </footer>
  </div>
</template>

<script>
import LocalStorage from '../assets/js/LocalStorage';
import Event from '../assets/js/Event';

export default {
  name: 'Card',

  props: {
    data: {
      type: Object,
      require: true,
    },
  },

  data() {
    return {};
  },

  created() {
    this.storage = new LocalStorage('user_info');
  },

  methods: {
    logout() {
      this.storage.clear();
      this.$router.push('/');

      Event.$emit('logout');
    },
  },
};
</script>

<style scoped></style>
