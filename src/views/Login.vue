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

        <div class="columns">
          <div class="column">
            <article class="message is-danger" v-if="errorMsg">
              <div class="message-header">
                <p>Atenção!</p>
              </div>

              <div class="message-body">{{errorMsg}}</div>
            </article>
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
      errorMsg: '',
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
      const user = obj.user;

      if (user.uid === 'Zlc63LFcG6WXs2uJ2u7OgiR0Y6A3' || user.uid === 'm4VZhhWnF0R8DPQduhX1byUa2KH3' || user.uid === 'OyF0uFpGE0gmB50VcSLQTv0QLlA3') {
        this.allowUser(user);
      } else {
        this.errorMsg = 'Você não tem autorização para realizar o login.';
      }
    },

    allowUser(user) {
      const userObj = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        id: user.uid,
      };

      this.storage.set(userObj);

      this.isLoading = false;

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
