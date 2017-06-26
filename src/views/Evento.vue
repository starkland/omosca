<template>
  <div>
    <m-subheader
      title="Evento"
      subtitle="Aqui vem um subtitulo">
    </m-subheader>

    <section class="section">
      <div class="container">
        <div class="heading">
          <h1 class="title">
            Cadastre seu evento
          </h1>

          <h2 class="subtitle">
            Cadastreu seu evento novamente.
          </h2>
        </div>

        <div class="columns">
          <div class="column is-one-quarter">
            <m-menu></m-menu>
          </div>

          <div class="column">
            <m-form></m-form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mForm from '@/components/Form';
import mMenu from '@/components/Menu';

export default {
  name: 'Evento',

  components: {
    mSubheader,
    mForm,
    mMenu,
  },
};
</script>

<style scoped>
.container {
  margin: 30px auto;
}

.heading {
  margin-bottom: 50px;
}
</style>
