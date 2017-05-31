<template>
  <div>
    <m-subheader
      title="Relatório"
      subtitle="Relatório de newsletters">
    </m-subheader>

    <m-rel-users></m-rel-users>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mRelUsers from '@/components/relatorio/Cadastros';

export default {
  name: 'Rel_News',

  components: {
    mSubheader,
    mRelUsers,
  },
};
</script>

<style scoped></style>
