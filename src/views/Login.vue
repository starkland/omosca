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
            <button class="button is-medium is-fb" @click="fbLogin">
              <span class="icon is-medium">
                <i class="fa fa-facebook"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';

import OAuth from '../assets/js/oAuth';
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
  },

  created() {
    this.fb_oauth = new OAuth('facebook');
    this.storage = new LocalStorage('user_info');
  },

  mounted() {
    const userInfo = this.storage.get();

    if (userInfo) {
      this.logged = true;
    }
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
