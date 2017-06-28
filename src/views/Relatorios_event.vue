<template>
  <div>
    <m-subheader
      title="Relatório"
      subtitle="Relatório de eventos">
    </m-subheader>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-2">
            <m-menu></m-menu>
          </div>

          <div class="column">
            <m-level
              total="2"
              following="10"
              followers="102"
              likes="1002">
            </m-level>

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

<style scoped></style>
