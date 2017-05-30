<template>
  <div>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{vm.name}}
          </h1>
          <h2 class="subtitle">
            {{vm.created_at | moment("dddd, Do MMM YYYY")}}
          </h2>
        </div>
      </div>
    </section>

    <div>
      <section class="section">
        <div class="container">
          <div class="heading">
            <h1 class="title">Sobre o Evento</h1>
            <h2 class="subtitle">
              {{vm.description}}
            </h2>
          </div>
        </div>
      </section>

      <figure>
        <img :src="vm.image" :alt="vm.name">

        <img
          v-if="!vm.image"
          alt="Imagem do evento">

        <figcaption>{{vm.name}}</figcaption>
      </figure>
    </div>

    <div class="section">
      <div class="container">
        <div class="heading">
          <h1 class="title">Contato</h1>
        </div>

        <div>
          <p>
            <a :href="vm.email">
              <span class="icon"><i class="fa fa-at"></i></span>
              <span>{{vm.email}}</span>
            </a>
          </p>

          <p>
            <a :href="vm.link" target="_blank">
              <span class="icon"><i class="fa fa-external-link"></i></span>
              <span>{{vm.link}}</span>
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="heading">
          <h1 class="title">Local</h1>
        </div>

        <div>
          <p>{{vm.place}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from '../assets/js/ApiService';
import Event from '../assets/js/Event';

export default {
  name: 'EventInterno',

  data() {
    return {
      vm: '',
    };
  },

  mounted() {
    this.api = new ApiService();

    this.getEventDetails();

    Event.$on('event_details', this.handleEventDetails);
  },

  methods: {
    getEventDetails() {
      this.api.getEventById(this.route);
    },

    handleEventDetails(obj) {
      this.vm = obj;
    },
  },

  computed: {
    route() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped>
  .section h1, .section h2 {
    color: #363636 !important;
  }

  figure {
    margin: 20px 0;
    text-align: center;
  }

  strong, a {
    color: #363636 !important;
  }

  p {
    margin: 20px 0;
  }
</style>
