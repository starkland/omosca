<template>
  <aside class="menu">
    <!-- Eventos -->
    <p class="menu-label">
      Eventos
    </p>

    <ul class="menu-list">
      <li>
        <a :class="{
            'is-active': setMenuActive('/evento/novo')
          }"
          @click="goTo('/evento/novo')">

          Cadastrar
        </a>
      </li>
    </ul>

    <!-- Relatórios -->
    <p class="menu-label">
      Relatórios
    </p>

    <ul class="menu-list">
      <li>
        <a :class="{
            'is-active': setMenuActive('/relatorios/eventos')
          }"
          @click="goTo('/relatorios/eventos')">
          Eventos
        </a>
      </li>

      <li>
        <a :class="{
            'is-active': setMenuActive('/relatorios/newsletter')
          }"
          @click="goTo('/relatorios/newsletter')">
          Newsletter
        </a>
      </li>
    </ul>

    <!-- Perfil -->
    <p class="menu-label">
      Perfil
    </p>

    <ul class="menu-list">
      <li>
        <a
          :class="{
            'is-active': setMenuActive('/perfil')
          }"
          @click="goTo('/perfil')">
          Meu perfil
        </a>
      </li>

      <li>
        <a
          :class="{
            'is-active': setMenuActive('/configuracoes')
          }"
          @click="goTo('/configuracoes')">
          Configurações
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'Menu',

    methods: {
      goTo(path) {
        this.$router.push(path);
      },

      setMenuActive(path) {
        const routerPath = this.$router.currentRoute.path;

        if (path === routerPath) {
          return true;
        }

        return false;
      },
    },
  };
</script>

<style scoped>
  a.is-active {
    background-color: #F5F5F5;
    color: #00D1B2;
  }
</style>
