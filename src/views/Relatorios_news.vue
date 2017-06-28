<template>
  <div>
    <m-subheader
      title="Relatório"
      subtitle="Relatório de newsletters">
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

            <m-rel-users></m-rel-users>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mRelUsers from '@/components/relatorio/Cadastros';
import mMenu from '@/components/Menu';
import mLevel from '@/components/Level';

export default {
  name: 'Rel_News',

  components: {
    mSubheader,
    mRelUsers,
    mMenu,
    mLevel,
  },
};
</script>

<style scoped></style>
