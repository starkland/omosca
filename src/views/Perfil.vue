<template>
  <div>
    <m-subheader
      title="Perfil"
      subtitle="Informações sobre o seu perfil">
    </m-subheader>

    <section class="section">
      <div class="container">
        <div class="heading">
          <h1 class="title">
            Perfil
          </h1>

          <h2 class="subtitle">
            Informações sobre o seu perfil
          </h2>
        </div>

        <div class="columns">
          <div class="column is-one-quarter">
            <m-menu></m-menu>
          </div>

          <div class="column">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img :src="userInfo.photoURL" :alt="userInfo.name">
                    </figure>
                  </div>

                  <div class="media-content">
                    <p class="title is-4">{{userInfo.name}}</p>
                    <p class="subtitle is-6">
                      <a :title="userInfo.email">{{userInfo.email}}</a>
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mMenu from '@/components/Menu';
import LocalStorage from '../assets/js/LocalStorage';

export default {
  name: 'Perfil',

  data() {
    return {
      userInfo: {},
    };
  },

  components: {
    mSubheader,
    mMenu,
  },

  created() {
    this.storage = new LocalStorage('user_info');

    this.getUserInfo();
  },

  methods: {
    getUserInfo() {
      const userInfo = this.storage.get();

      if (userInfo) {
        this.userInfo = userInfo;
      }
    },
  },
};
</script>

<style scoped>
  .heading {
    margin-bottom: 50px;
  }
</style>
