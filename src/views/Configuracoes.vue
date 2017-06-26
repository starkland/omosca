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
  name: 'Configuracoes',

  components: {
    mSubheader,
    mMenu,
  },
};
</script>

<style scoped></style>
