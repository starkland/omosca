<template>
  <h1>{{ route }}</h1>
</template>

<script>
export default {
  name: 'EventInterno',

  data() {
    return {};
  },

  computed: {
    route() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped></style>
