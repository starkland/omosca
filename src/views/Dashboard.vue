<template>
  <div>
    <m-subheader
      title="Dashboard"
      subtitle="Gerencie toda a plataforma por aqui">
    </m-subheader>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <m-menu></m-menu>
          </div>

          <div class="column">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mMenu from '@/components/Menu';

export default {
  name: 'Dashboard',

  data() {
    return {};
  },

  components: {
    mSubheader,
    mMenu,
  },
};
</script>

<style scoped>
  .level {
    text-align: center;
  }
</style>
