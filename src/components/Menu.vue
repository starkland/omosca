<template>
  <aside class="menu">
    <!-- Eventos -->
    <p class="menu-label">
      Eventos
    </p>

    <ul class="menu-list">
      <li>
        <a @click="goTo('/evento/novo')">Cadastrar</a>
      </li>
    </ul>

    <!-- Relatórios -->
    <p class="menu-label">
      Relatórios
    </p>

    <ul class="menu-list">
      <li>
        <a @click="goTo('/relatorios/eventos')">
          Eventos
        </a>
      </li>

      <li>
        <a @click="goTo('/relatorios/newsletter')">
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
        <a @click="goTo('')">
          Meu perfil
        </a>
      </li>

      <li>
        <a @click="goTo('')">
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
    },
  };
</script>

<style scoped></style>
