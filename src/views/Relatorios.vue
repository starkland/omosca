<template>
  <div>
    <m-subheader
      title="Relatório"
      subtitle="Relatório dos eventos cadastrados.">
    </m-subheader>

    <m-table></m-table>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mTable from '@/components/Table';

export default {
  name: 'Rel_Eventos',

  data() {
    return {};
  },

  components: {
    mSubheader,
    mTable,
  },
};
</script>

<style scoped></style>
