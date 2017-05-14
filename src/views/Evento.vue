<template>
  <div>
    <m-subheader
      title="Evento"
      subtitle="Aqui vem um subtitulo">
    </m-subheader>

    <m-form></m-form>

    <m-newsletter></m-newsletter>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mForm from '@/components/Form';
import mNewsletter from '@/components/Newsletter';

export default {
  name: 'hello',

  data() {
    return {
    };
  },

  components: {
    mSubheader,
    mForm,
    mNewsletter,
  },
};
</script>

<style scoped>
.container {
  margin: 30px auto;
}
</style>
