<template>
  <div>
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
            type="email"
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
          Foto do evento
        </label>

        <p class="control has-icons-left has-icons-right">
          <input
            class="input input-file"
            type="text"
            placeholder="link de uma foto para o evento"
            v-model="form.image"
            :class="{ 'is-danger' : fields.image }"
            >
            <!-- @change="fileChange" -->

            <span class="icon is-small is-left">
              <i class="fa fa-link"></i>
            </span>
        </p>

        <!-- <p class="control image-content">
          <img :src="form.image" />

          <p>nome: <span>{{image.name}}</span></p>
          <p>extensão: <span>{{image.type}}</span></p>
          <p>tamanho: <span>{{image.size}}</span></p>
        </p> -->
      </div>

      <div class="field">
        <label class="label">
          Data e horário do evento
        </label>

        <p class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="datetime-local"
            placeholder="data do evento"
            :class="{ 'is-danger' : fields.date }"
            v-model="form.date">

          <span class="icon is-small is-left">
            <i class="fa fa-calendar"></i>
          </span>

          <span class="icon is-small is-right"
            v-if="fields.date">
            <i class="fa fa-warning"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <label class="label">
          Local do evento
        </label>

        <p class="control has-icons-left has-icons-right">
          <vue-google-autocomplete
            id="map"
            classname="input"
            v-model="form.location"
            @placechanged="getAddressData">
          </vue-google-autocomplete>

          <span class="icon is-small is-left">
            <i class="fa fa-location-arrow"></i>
          </span>

          <span class="icon is-small is-right"
            v-if="fields.location">
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
            Li e aceito os <a href="/termos">termos</a>.
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
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete';
import Event from '../assets/js/Event';

export default {
  name: 'Form',

  components: {
    VueGoogleAutocomplete,
  },

  data() {
    return {
      form: {
        name: '',
        email: '',
        image: '',
        link: '',
        date: '',
        location: {
          address: '',
          coords: [],
        },
        description: '',
        terms: false,
      },
      fields: {
        name: false,
        email: false,
        image: false,
        link: false,
        date: false,
        location: false,
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

      Object.keys(form).forEach((item) => {
        if (!form[item]) {
          this.fields[item] = true;
          this.isLoading = false;
        } else {
          this.fields[item] = false;
        }
      });

      if (this.isLoading === true) {
        this.submitForm(form);
      }
    },

    fileChange(e) {
      const files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        return;
      }

      this.createImage(files[0]);
    },

    createImage(file) {
      console.warn(file);

      this.image = {
        url: file,
        name: file.name,
        size: file.size,
        type: file.type,
        blob: new Uint8Array(file),
      };

      const reader = new FileReader();

      reader.onload = (e) => {
        this.form.image = e.target.result;
      };

      reader.readAsDataURL(file);
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
        image: '',
        link: '',
        date: '',
        location: {
          address: '',
          coords: [],
        },
        description: '',
        terms: false,
      };
    },

    hideAlert() {
      this.showAlert = !this.showAlert;
    },

    getAddressData(address) {
      const {
        route, locality,
        latitude, longitude,
        country,
      } = address;

      const locationForm = this.form.location;

      locationForm.address = `${route}, ${locality} - ${country}`;
      locationForm.coords[0] = latitude;
      locationForm.coords[1] = longitude;
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

  .image-content img {
    margin: 10px 0;
    max-width: 100%;
    height: 200px;
  }

  .image-content span {
    font-weight: 900;
  }
</style>
