<template>
  <footer class="footer is-dark">
    <div class="container">
      <div class="content has-text-centered">
        <p>© Copyright 2017 O Mosca - All Rights Reserved</p>
        <p>
          <a class="icon" title="Uhull"><i class="fa fa-grav"></i></a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {};
  },

};
</script>

<style scoped>
  .footer {
    padding-bottom: 3rem;
    background-color: #363636;
  }

  .footer p,
  .footer a:hover {
    color: #f5f5f5;
  }
</style>
