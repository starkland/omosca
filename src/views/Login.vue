<template>
  <div>
    <m-subheader
      title="Login"
      subtitle="Acesso restrito para usuários autenticados.">
    </m-subheader>

    <div class="section">
      <div class="container">
        <button class="button is-medium is-fb" @click="fbLogin">
          <span class="icon is-medium">
            <i class="fa fa-facebook"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';

import OAuth from '../assets/js/oAuth';
import Event from '../assets/js/Event';
import LocalStorage from '../assets/js/LocalStorage';

export default {
  name: 'Login',

  data() {
    return {};
  },

  components: {
    mSubheader,
  },

  methods: {
    fbLogin() {
      this.fb_oauth.login();
    },

    handleFacebook(obj) {
      const user = {
        name: obj.user.displayName,
        email: obj.user.email,
        photoURL: obj.user.photoURL,
        id: obj.user.uid,
      };

      this.storage.set(user);

      setTimeout(() => {
        // autentica o cara;
      }, 300);
    },
  },

  created() {
    this.fb_oauth = new OAuth('facebook');
    this.storage = new LocalStorage('user_info');

    Event.$on('facebook_ok', this.handleFacebook);
  },

  beforeDestroy() {
    Event.$off('facebook_ok');
  },
};
</script>

<style scoped>
  .section {
    text-align: center;
  }

  .is-fb {
    background-color: #6275AD;
  }

  .is-fb i {
    color: #FFF !important;
  }
</style>
