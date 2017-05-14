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
          <button class="button is-primary"
            @click="handleForm">
            Submit
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },

  methods: {
    handleForm() {
      const form = this.form;

      Object.keys(form).forEach((item) => {
        if (!form[item]) {
          this.fields[item] = true;
        } else {
          this.fields[item] = false;
        }
      });
    },
  },
};
</script>

<style scoped>
  .heading {
    margin-bottom: 50px;
  }
</style>
