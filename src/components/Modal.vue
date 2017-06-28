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
        <div v-show="modal.type == 'remove'">
          <p>
            Você tem certeza que deseja remover este evento? <br /> Esta ação não poderá ser desfeita!
          </p>
        </div>

        <!-- Edit -->
        <div v-show="modal.type == 'edit'">
          <m-form></m-form>
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
import mForm from '../components/Form';

export default {
  name: 'Modal',

  components: {
    mForm,
  },

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
        image: false,
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
      this.modal.title = `Editando ${obj.name}`;
      this.modal.type = 'edit';

      this.isActive = !this.isActive;

      this.form = obj;
      this.$children[0].form = this.form;
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
