<template>
  <div>
    <m-slide></m-slide>

    <m-features></m-features>

    <m-newsletter></m-newsletter>

    <m-download></m-download>
  </div>
</template>

<script>
import mFeatures from '@/components/Features';
import mNewsletter from '@/components/Newsletter';
import mDownload from '@/components/Download';

import mSlide from '@/components/Slide';

export default {
  name: 'Home',

  data() {
    return {};
  },

  components: {
    mFeatures,
    mNewsletter,
    mDownload,
    mSlide,
  },
};
</script>

<style scoped>
  .container {
    margin: 30px auto;
  }
</style>
