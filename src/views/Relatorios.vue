<template>
  <div>
    <m-subheader
      title="Relatório"
      subtitle="Relatório da aplicação.">
    </m-subheader>

    <m-rel-events></m-rel-events>

    <m-rel-users></m-rel-users>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mRelEvents from '@/components/relatorio/Events';
import mRelUsers from '@/components/relatorio/Cadastros';

export default {
  name: 'Rel_Eventos',

  data() {
    return {};
  },

  components: {
    mSubheader,
    mRelEvents,
    mRelUsers,
  },
};
</script>

<style scoped></style>
