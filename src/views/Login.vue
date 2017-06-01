<template>
  <div>
    <m-subheader
      title="Login"
      subtitle="Acesso restrito para usuários autenticados.">
    </m-subheader>

    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <a class="button is-medium is-default"
              :class="{ 'is-loading': isLoading }"
              @click="fbLogin">

              <span class="icon">
                <i class="fa fa-facebook"></i>
              </span>

              <span>Entre com o facebook</span>
            </a>
          </div>
        </div>
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
    return {
      isLoading: false,
    };
  },

  components: {
    mSubheader,
  },

  methods: {
    fbLogin() {
      this.isLoading = true;
      this.fb_oauth.login();
    },

    handleFacebook(obj) {
      this.isLoading = false;

      const user = {
        name: obj.user.displayName,
        email: obj.user.email,
        photoURL: obj.user.photoURL,
        id: obj.user.uid,
      };

      this.storage.set(user);

      setTimeout(() => {
        this.$router.push('/dashboard');
      }, 200);
    },
  },

  created() {
    this.fb_oauth = new OAuth('facebook');
    this.storage = new LocalStorage('user_info');

    Event.$on('facebook_ok', this.handleFacebook);
  },

  mounted() {
    const userInfo = this.storage.get();

    if (userInfo) {
      setTimeout(() => {
        this.$router.push('/dashboard');
      }, 200);
    }
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
</style>
