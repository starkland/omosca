<template>
  <div>
    <m-subheader
      title="Relatório"
      subtitle="Relatório dos eventos cadastrados.">
    </m-subheader>

    <m-rel-events></m-rel-events>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mRelEvents from '@/components/relatorio/Events';

export default {
  name: 'Rel_Eventos',

  data() {
    return {};
  },

  components: {
    mSubheader,
    mRelEvents,
  },
};
</script>

<style scoped></style>
