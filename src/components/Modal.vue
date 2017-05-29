<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Editar Evento
        </p>

        <button class="delete"
          @click="hideModal">
        </button>
      </header>

      <section class="modal-card-body">
        <!-- Content ... -->
      </section>

      <footer class="modal-card-foot">
        <a class="button is-success">
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

export default {
  name: 'Modal',

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    handleModal(obj) {
      this.isActive = !this.isActive;

      console.warn(obj);
    },

    hideModal() {
      this.isActive = false;
    },
  },

  mounted() {
    Event.$on('edit_event', this.handleModal);
  },

  beforeDestroy() {
    Event.$off('edit_event');
  },
};
</script>

<style scoped></style>
