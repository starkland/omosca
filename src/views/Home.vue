<template>
  <div>
    <m-subheader
      title="Home"
      subtitle="Aqui vem um subtitulo">
    </m-subheader>

    <m-features></m-features>

    <m-newsletter></m-newsletter>

    <m-download></m-download>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mFeatures from '@/components/Features';
import mNewsletter from '@/components/Newsletter';
import mDownload from '@/components/Download';

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
    mDownload,
  },
};
</script>

<style scoped>
.container {
  margin: 30px auto;
}
</style>
