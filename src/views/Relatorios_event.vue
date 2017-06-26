<template>
  <div>
    <m-subheader
      title="Relatório"
      subtitle="Relatório de eventos">
    </m-subheader>

    <section class="section">
      <div class="container">
        <div class="heading">
          <h1 class="title">
            Relatório
          </h1>

          <h2 class="subtitle">
            Relatório de eventos cadastrados
          </h2>
        </div>

        <aside>
          <m-level
            total="2"
            following="10">
          </m-level>
        </aside>

        <div class="columns">
          <div class="column is-one-quarter">
            <m-menu></m-menu>
          </div>

          <div class="column">
            <m-rel-events></m-rel-events>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mRelEvents from '@/components/relatorio/Events';
import mMenu from '@/components/Menu';
import mLevel from '@/components/Level';

export default {
  name: 'Rel_Eventos',

  components: {
    mSubheader,
    mRelEvents,
    mMenu,
    mLevel,
  },
};
</script>

<style scoped>
  aside {
    margin: 50px auto;
  }
</style>
