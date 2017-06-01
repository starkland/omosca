<template>
  <nav class="nav has-shadow">
    <div class="nav-left">
      <a class="nav-item">
        <img src="http://omosca.com/blog/wp-content/uploads/2017/05/icon-mosca-272x90px.png" alt="O Mosca">
      </a>
    </div>

    <div class="nav-center">
      <a class="nav-item" href="http://omosca.com/blog/" target="_blank" title="Visite o nosso Blog!">
        <span class="icon">
          <i class="fa fa-rss"></i>
        </span>
      </a>

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
        v-if="!isLogged"
        class="nav-item"
        title="Login"
        to="/login"
        exact>
        Login
      </router-link>

      <router-link
        v-if="isLogged"
        class="nav-item"
        title="Dashboard"
        to="/dashboard"
        exact>
        Dashboard
      </router-link>

      <a
        v-if="isLogged"
        class="nav-item"
        title="Sair"
        @click="logout">
        Sair
      </a>

      <div class="nav-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button" title="Em breve na Google Play Store.">
              <span class="icon">
                <i class="fa fa-android"></i>
              </span>
            </a>
          </p>

          <p class="control">
            <a class="button" title="Em breve na App Store.">
              <span class="icon">
                <i class="fa fa-apple"></i>
              </span>
            </a>
          </p>

          <p class="control">
            <a class="button" title="Em breve na Windows Store.">
              <span class="icon">
                <i class="fa fa-windows"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LocalStorage from '../assets/js/LocalStorage';
import Event from '../assets/js/Event';

export default {
  name: 'Navbar',

  data() {
    return {
      isOpen: false,
      isLogged: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },

    handleFacebook(obj) {
      this.isLogged = !this.isLogged;

      const user = {
        name: obj.user.displayName,
        email: obj.user.email,
        photoURL: obj.user.photoURL,
        id: obj.user.uid,
      };

      this.storage.set(user);
    },

    logout() {
      this.storage.clear();
      this.isLogged = false;

      this.$router.push('/');
    },
  },


  created() {
    this.storage = new LocalStorage('user_info');

    Event.$on('facebook_ok', this.handleFacebook);
  },

  mounted() {
    if (this.storage.get()) {
      this.isLogged = true;
    }
  },

  beforeDestroy() {
    Event.$off('facebook_ok');
  },
};
</script>

<style scoped>
  .router-link-active {
    border-bottom: 3px solid #89609E;
    color: #89609E;
    padding-bottom: calc(0.75rem - 3px);
  }

  .nav-item img {
    max-height: 2.75rem;
  }
</style>
