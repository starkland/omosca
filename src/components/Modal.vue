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
        <div v-if="modal.type == 'remove'">
          <p>
            Você tem certeza que deseja remover este evento? <br /> Esta ação não poderá ser desfeita!
          </p>
        </div>

        <div v-if="modal.type == 'edit'">
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
      userData: {},
    };
  },

  methods: {
    handleEdit(obj) {
      this.modal.title = 'Editar Evento';
      this.modal.type = 'edit';

      this.isActive = !this.isActive;

      this.userData = obj;
    },

    handleRemove(obj) {
      this.modal.title = 'Remover Evento';
      this.modal.type = 'remove';

      this.isActive = !this.isActive;

      this.userData = obj;
    },

    hideModal() {
      this.isActive = false;
    },

    editEvent() {
      console.warn('Editar..');

      setTimeout(() => {
        this.isActive = !this.isActive;
      }, 300);
    },

    removeEvent() {
      const userId = this.userData.created_at;

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
