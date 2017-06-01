<template>
  <div>
    <m-subheader
      title="Evento"
      subtitle="Aqui vem um subtitulo">
    </m-subheader>

    <m-form></m-form>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mForm from '@/components/Form';

export default {
  name: 'Evento',

  components: {
    mSubheader,
    mForm,
  },
};
</script>

<style scoped>
.container {
  margin: 30px auto;
}
</style>
