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

      <div class="content">
        <aside :class="{ 'is-active': isActive === 'smartphone' }">
          <h1>Smartphone</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, cumque aliquid natus consequuntur voluptates deserunt perspiciatis, quisquam quidem non labore!</p>
        </aside>

        <aside :class="{ 'is-active': isActive === 'tablet' }">
          <h1>Tablet</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, cumque aliquid natus consequuntur voluptates deserunt perspiciatis, quisquam quidem non labore!</p>
        </aside>

        <aside :class="{ 'is-active': isActive === 'web' }">
          <h1>Web</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, cumque aliquid natus consequuntur voluptates deserunt perspiciatis, quisquam quidem non labore!</p>
        </aside>
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
    margin-bottom: 50px;
  }

  .title {
    text-align: center;
  }

  .content {
    background-color: #EFEFEF;
    padding: 10px;
    min-height: 400px;
  }

  .content aside {
    display: none;
  }

  .content aside.is-active {
    display: block;
  }
</style>
