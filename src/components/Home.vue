<template>
  <div>
    <m-subheader
      title="Home"
      subtitle="Aqui vem um subtitulo">
    </m-subheader>

    <m-features></m-features>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mFeatures from '@/components/Features';

export default {
  name: 'hello',

  data() {
    return {
    };
  },

  components: {
    mSubheader,
    mFeatures,
  },
};
</script>

<style scoped>
.container {
  margin: 30px auto;
}
</style>
