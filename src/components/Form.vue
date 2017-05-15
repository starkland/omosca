<template>
  <div class="section">
    <div class="container">
      <div class="heading">
        <h1 class="title">
          Cadastre seu evento
        </h1>
        <h2 class="subtitle">
          Cadastreu seu evento novamente.
        </h2>
      </div>

      <form @submit.prevent="handleForm">
        <div class="field">
          <label class="label">
            Nome do evento
          </label>

          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="nome do evento"
              :class="{ 'is-danger' : fields.name }"
              v-model="form.name">

            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>

            <span class="icon is-small is-right"
              v-if="fields.name">
              <i class="fa fa-warning"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <label class="label">
            Email do organizador
          </label>

          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              v-model="form.email"
              :class="{ 'is-danger' : fields.email }"
              placeholder="user@email.com">

            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>

            <span class="icon is-small is-right"
              v-if="fields.email">
              <i class="fa fa-warning"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <label class="label">
            Link do evento
          </label>

          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="link do evento"
              :class="{ 'is-danger' : fields.link }"
              v-model="form.link">

            <span class="icon is-small is-left">
              <i class="fa fa-link"></i>
            </span>

            <span class="icon is-small is-right"
              v-if="fields.link">
              <i class="fa fa-warning"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <label class="label">
            Breve descrição
          </label>

          <p class="control has-icons-left has-icons-right">
            <textarea
              class="textarea"
              type="text"
              placeholder="descreva o que vai ter no seu evento"
              :class="{ 'is-danger' : fields.description }"
              v-model="form.description">
            </textarea>

            <span class="icon is-small is-right"
              v-if="fields.description">
              <i class="fa fa-warning"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control">
            <label class="checkbox"
              :class="{ 'is-danger' : fields.terms }">
              <input
                type="checkbox"
                v-model="form.terms">
              Li e aceito os <a href="#">termos</a>.
            </label>
          </p>
        </div>

        <div class="field is-grouped">
          <p class="control">
            <button
              type="submit"
              class="button is-primary"
              :class="{ 'is-loading' : isLoading }">
              Submit
            </button>
          </p>
        </div>
      </form>

      <div class="notification is-primary" v-if="showAlert">
        <button class="delete" @click="hideAlert"></button>
        Evento cadastrado com sucesso, em breve iniciamos as divulgações!
      </div>
    </div>
  </div>
</template>

<script>
import Event from '../assets/js/Event';

export default {
  name: 'Form',

  data() {
    return {
      form: {
        name: '',
        email: '',
        link: '',
        description: '',
        terms: false,
      },
      fields: {
        name: false,
        email: false,
        link: false,
        description: false,
        terms: false,
      },
      isLoading: false,
      showAlert: false,
    };
  },

  methods: {
    handleForm() {
      this.isLoading = true;
      const form = this.form;

      // Object.keys(form).forEach((item) => {
      //   if (!form[item]) {
      //     this.fields[item] = true;
      //   } else {
      //     this.fields[item] = false;
      //   }
      // });

      this.submitForm(form);
    },

    submitForm(obj) {
      Event.$emit('submit_form', obj);
      this.handlePreEvents();
    },

    handlePreEvents() {
      setTimeout(() => {
        this.isLoading = false;
        this.showAlert = true;
      }, 200);

      this.clearForm();
    },

    clearForm() {
      this.form = {
        name: '',
        email: '',
        link: '',
        description: '',
        terms: false,
      };
    },

    hideAlert() {
      this.showAlert = !this.showAlert;
    },
  },
};
</script>

<style scoped>
  .heading {
    margin-bottom: 50px;
  }

  .notification {
    margin-top: 30px;
  }
</style>
