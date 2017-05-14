<template>
  <div class="section">
    <div class="container">
      <div class="heading">
        <h1 class="title">
          Acesse em qualquer plataforma
        </h1>
      </div>

      <div class="tabs is-toggle is-fullwidth is-large">
        <ul>
          <li :class="{ 'is-active': isActive === 'smartphone' }">
            <a @click="activeTab('smartphone')">
              <span class="icon"><i class="fa fa-mobile"></i></span>
              <span>Smartphone</span>
            </a>
          </li>

          <li :class="{ 'is-active': isActive === 'tablet' }">
            <a @click="activeTab('tablet')">
              <span class="icon"><i class="fa fa-tablet"></i></span>
              <span>Tablet</span>
            </a>
          </li>

          <li :class="{ 'is-active': isActive === 'web' }">
            <a @click="activeTab('web')">
              <span class="icon"><i class="fa fa-laptop"></i></span>
              <span>Web</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Download',

  data() {
    return {
      isActive: 'smartphone',
    };
  },

  methods: {
    activeTab(type) {
      this.isActive = type;
    },
  },
};
</script>

<style scoped>
  .heading {
    margin-bottom: 30px;
  }

  .title {
    text-align: center;
  }
</style>
