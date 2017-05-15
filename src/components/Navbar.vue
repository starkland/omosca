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

      <router-link
        class="nav-item"
        title="Home"
        to="/"
        exact>
        Home
      </router-link>

      <router-link
        class="nav-item"
        title="Home"
        to="/evento"
        exact>
        Evento
      </router-link>

      <router-link
        class="nav-item"
        title="Home"
        to="/relatorio/eventos"
        exact>
        Relatório dos eventos
      </router-link>

      <div class="nav-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button" title="Em breve">
              <span class="icon">
                <i class="fa fa-android"></i>
              </span>
              <!-- <span>Google Play</span> -->
            </a>
          </p>

          <p class="control">
            <a class="button" title="Em breve">
              <span class="icon">
                <i class="fa fa-apple"></i>
              </span>
              <!-- <span>App Store</span> -->
            </a>
          </p>

          <p class="control">
            <a class="button" title="Em breve">
              <span class="icon">
                <i class="fa fa-windows"></i>
              </span>
              <!-- <span>Windows Phone</span> -->
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
.router-link-active {
  border-bottom: 3px solid #89609E;
  color: #89609E;
  padding-bottom: calc(0.75rem - 3px);
}
</style>
