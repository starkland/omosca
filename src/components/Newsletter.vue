<template>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="heading">
              <h1 class="title">Seja o primeiro!</h1>
              <h2 class="subtitle">
                Cadastre seu e-mail e seja um dos <strong>primeiros</strong> a ter acesso a <strong>promoções</strong>, novidades e <strong>eventos</strong> da sua cidade!
              </h2>
            </div>
          </div>

          <div class="column">
            <div class="field has-addons">
              <p class="control is-expanded">
                <input
                  class="input is-medium"
                  type="email"
                  v-model="email"
                  placeholder="user@email.com">
              </p>

              <p class="control">
                <button
                  class="button is-primary is-medium"
                  :class="{ 'is-loading': isLoading }"
                  @click="handleNewsletter">

                  Enviar
                </button>
              </p>
            </div>
          </div>

          <div class="column is-primary" v-if="showAlert">
            <div class="notification">
              <button class="delete" @click="hideAlert"></button>
              E-mail cadastrado com sucesso, você será um dos primeiros a experimentar o nosso App.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Event from '../assets/js/Event';

export default {
  name: 'Newsletter',

  data() {
    return {
      isLoading: false,
      showAlert: false,
      email: '',
    };
  },

  methods: {
    handleNewsletter() {
      this.isLoading = true;

      if (this.email) {
        Event.$emit('newsletter', this.email);
        this.handleNewsletterOk();
      } else {
        this.isLoading = false;
      }
    },

    handleNewsletterOk() {
      setTimeout(() => {
        this.isLoading = false;
        this.showAlert = true;
        this.email = '';
      }, 200);
    },

    hideAlert() {
      this.showAlert = !this.showAlert;
    },
  },
};
</script>

<style scoped></style>
