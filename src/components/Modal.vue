<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{modal.title}}
        </p>

        <button class="delete"
          @click="hideModal">
        </button>
      </header>

      <section class="modal-card-body">
        <!-- Remove -->
        <div v-if="modal.type == 'remove'">
          <p>
            Você tem certeza que deseja remover este evento? <br /> Esta ação não poderá ser desfeita!
          </p>
        </div>

        <!-- Edit -->
        <div v-if="modal.type == 'edit'">
          <form>
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
                <input
                  class="input"
                  type="text"
                  placeholder="local do evento"
                  :class="{ 'is-danger' : fields.place }"
                  v-model="form.place">

                <span class="icon is-small is-left">
                  <i class="fa fa-location-arrow"></i>
                </span>

                <span class="icon is-small is-right"
                  v-if="fields.place">
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
          </form>
        </div>
      </section>

      <footer class="modal-card-foot">
        <a class="button is-success"
          @click="submitModal()">
          Salvar
        </a>

        <a class="button" @click="hideModal">
          Cancelar
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
import Event from '../assets/js/Event';
import ApiService from '../assets/js/ApiService';

export default {
  name: 'Modal',

  data() {
    return {
      isActive: false,
      modal: {
        title: '',
        type: '',
      },
      fields: {
        name: false,
        email: false,
        link: false,
        date: false,
        place: false,
        description: false,
      },
      form: {},
    };
  },

  methods: {
    handleEdit(obj) {
      this.modal.title = 'Editar Evento';
      this.modal.type = 'edit';

      this.isActive = !this.isActive;

      this.form = obj;
    },

    handleRemove(obj) {
      this.modal.title = 'Remover Evento';
      this.modal.type = 'remove';

      this.isActive = !this.isActive;

      this.form = obj;
    },

    hideModal() {
      this.isActive = false;
    },

    editEvent() {
      const form = this.form;

      Object.keys(form).forEach((item) => {
        if (!form[item]) {
          this.fields[item] = true;
        } else {
          this.fields[item] = false;
        }
      });

      this.api.editEvent(this.form);

      setTimeout(() => {
        this.isActive = !this.isActive;
      }, 300);

      this.api.getAllEvents();
    },

    removeEvent() {
      const userId = this.form.created_at;

      this.api.removesEventById(userId);

      setTimeout(() => {
        this.isActive = !this.isActive;
      }, 300);

      this.api.getAllEvents();
    },

    submitModal() {
      switch (this.modal.type) {
        case 'edit':
          this.editEvent();
          break;

        case 'remove':
          this.removeEvent();
          break;

        default:
          console.warn('Defaut..');
          break;
      }
    },
  },

  created() {
    this.api = new ApiService();
  },

  mounted() {
    Event.$on('edit_event', this.handleEdit);
    Event.$on('remove_event', this.handleRemove);
  },

  beforeDestroy() {
    Event.$off('edit_event');
    Event.$off('remove_event');
  },
};
</script>

<style scoped></style>
