<template>
  <nav class="nav has-shadow">
    <div class="nav-left">
      <a class="nav-item">
        <img src="http://bulma.io/images/bulma-logo.pn" alt="O Mosca">
      </a>
    </div>

    <div class="nav-center">
      <a class="nav-item" href="https://www.facebook.com/omoscape/" target="_blank" title="Visite o nosso Facebook">
        <span class="icon">
          <i class="fa fa-facebook"></i>
        </span>
      </a>

      <a class="nav-item" href="https://www.instagram.com/omosca/" target="_blank" title="Visite o nosso Instagram">
        <span class="icon">
          <i class="fa fa-instagram"></i>
        </span>
      </a>
    </div>

    <span class="nav-toggle"
      @click="toggleMenu"
      :class="{ 'is-active': isOpen }">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div class="nav-right nav-menu"
      :class="{ 'is-active': isOpen }">

      <a class="nav-item">
        Home
      </a>

      <a class="nav-item">
        Documentation
      </a>

      <a class="nav-item">
        Blog
      </a>

      <div class="nav-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button" >
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
              <span>Tweet</span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },

};
</script>

<style scoped>
</style>
