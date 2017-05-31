<template>
  <div>
    <m-subheader
      title="Dashboard"
      subtitle="Gerencie toda a plataforma por aqui">
    </m-subheader>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter">
            <m-menu></m-menu>
          </div>

          <div class="column">
            <nav class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Tweets</p>
                  <p class="title">3,456</p>
                </div>
              </div>

              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Following</p>
                  <p class="title">123</p>
                </div>
              </div>

              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Followers</p>
                  <p class="title">456K</p>
                </div>
              </div>

              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Likes</p>
                  <p class="title">789</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import mSubheader from '@/components/Subheader';
import mMenu from '@/components/Menu';

export default {
  name: 'Dashboard',

  data() {
    return {};
  },

  components: {
    mSubheader,
    mMenu,
  },
};
</script>

<style scoped>
  .level {
    text-align: center;
  }
</style>
