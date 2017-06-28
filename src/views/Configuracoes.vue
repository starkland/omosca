<template>
  <div>
    <m-subheader
      title="Configurações"
      subtitle="">
    </m-subheader>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter">
            <m-menu></m-menu>
          </div>

          <div class="column">
            <form>
              <fieldset class="field">
                <input
                  id="location"
                  type="checkbox"
                  @change="getLocation"
                >

                <label for="location" class="checkbox">
                  Compartilhar a minha localização para um melhor relatório.
                </label>
              </fieldset>

              <fieldset class="field">
                <input
                  id="notifications"
                  type="checkbox"
                  @change="getNotification"
                >

                <label for="notifications" class="checkbox">
                  Permitir o recebimento de notificações.
                </label>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mMenu from '@/components/Menu';

import Location from '../assets/js/Location';
import Notification from '../assets/js/Notification';

export default {
  name: 'Configuracoes',

  components: {
    mSubheader,
    mMenu,
  },

  mounted() {
    this.location = new Location();
    this.notification = new Notification();
  },

  methods: {
    getLocation(evt) {
      const checked = evt.target.checked;

      if (checked) {
        console.warn('getLocation');
        this.location.get();
      }
    },

    getNotification(evt) {
      const checked = evt.target.checked;

      if (checked) {
        console.warn('getNotification');
        this.notification.get();
      }
    },
  },
};
</script>

<style scoped>
  fieldset {
    border: none;
  }
</style>
