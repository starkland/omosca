<template>
  <aside class="menu">
    <!-- Eventos -->
    <p class="menu-label">
      Eventos
    </p>

    <ul class="menu-list">
      <li>
        <a :class="{
            'is-active': setMenuActive('/dashboard/evento/novo')
          }"
          @click="goTo('/dashboard/evento/novo')">

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
            'is-active': setMenuActive('/dashboard/relatorios/eventos')
          }"
          @click="goTo('/dashboard/relatorios/eventos')">
          Eventos
        </a>
      </li>

      <li>
        <a :class="{
            'is-active': setMenuActive('/dashboard/relatorios/newsletter')
          }"
          @click="goTo('/dashboard/relatorios/newsletter')">
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
            'is-active': setMenuActive('/dashboard/perfil/me')
          }"
          @click="goTo('/dashboard/perfil/me')">
          Meu perfil
        </a>
      </li>

      <li>
        <a
          :class="{
            'is-active': setMenuActive('/dashboard/perfil/configuracoes')
          }"
          @click="goTo('/dashboard/perfil/configuracoes')">
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
