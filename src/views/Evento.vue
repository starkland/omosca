<template>
  <div>
    <m-subheader
      title="Evento"
      subtitle="Aqui vem um subtitulo">
    </m-subheader>

    <m-features></m-features>

    <m-newsletter></m-newsletter>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mFeatures from '@/components/Features';
import mNewsletter from '@/components/Newsletter';

export default {
  name: 'hello',

  data() {
    return {
    };
  },

  components: {
    mSubheader,
    mFeatures,
    mNewsletter,
  },
};
</script>

<style scoped>
.container {
  margin: 30px auto;
}
</style>
