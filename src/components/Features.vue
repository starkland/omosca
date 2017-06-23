<template>
  <div class="section">
    <section class="container">
      <div class="heading">
        <!-- <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2> -->
      </div>

      <div class="columns content">
        <aside class="column map">
          <h3>Mapa</h3>
          <p>Encontre os eventos mais próximos através da sua localização ou navegando pelo mapa de forma rápida e prática.</p>
        </aside>

        <aside class="column agenda">
          <h3>Agenda</h3>
          <p>Aqui você vai encontrar todas as informações necessárias sobre os eventos como data, horário, atrações, local e muito mais.</p>
        </aside>

        <aside class="column profile">
          <h3>Perfil</h3>
          <p>São seus dados comuns de usuário como nome, sobrenome, e-mail, data de aniversário, etc.</p>
        </aside>
      </div>

      <div class="columns content">
        <aside class="column favorites">
          <h3>Favoritos</h3>
          <p>Marque seus eventos favoritos e os encontre de forma rápida.</p>
        </aside>

        <aside class="column schedule">
          <h3>Programação</h3>
          <p>Veja todos os eventos que irão acontecer de uma forma mais simples e faça sua programação.</p>
        </aside>

        <aside class="column discount">
          <h3>Descontos</h3>
          <p>Aqui você encontra os melhores descontos e promoções da sua região.</p>
        </aside>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Features',
};
</script>

<style scoped>
  .section {
    min-height: 600px;
    background-image: url('../assets/images/pattern.png');
    background-repeat: repeat;
    animation: moveBg linear infinite 30s;
  }

  .heading {
    margin-bottom: 70px
  }

  .column {
    margin: 50px auto;
    position: relative;
    text-align: center;
  }

  .column:before {
    content: '';

    width: 60px;
    height: 60px;
    border-radius: 100%;
    display: inline-block;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: -60px;

    /*background-color: orange;*/
    background-repeat: no-repeat;
    background-size: contain;
  }

  .column.map:before {
    background-image: url('../assets/images/icons/features/mapa.svg');
  }

  .column.agenda:before {
    background-image: url('../assets/images/icons/features/agenda.svg');
  }

  .column.profile:before {
    background-image: url('../assets/images/icons/features/perfil.svg');
  }

  .column.favorites:before {
    background-image: url('../assets/images/icons/features/favoritos.svg');
  }

  .column.schedule:before {
    background-image: url('../assets/images/icons/features/programacao.svg');
  }

  .column.discount:before {
    background-image: url('../assets/images/icons/features/descontos.svg');
  }

  @keyframes moveBg {
    0% { background-position: 0 10%; }
    50% { background-position: 50% 40%; }
    100% { background-position: 100% 90%; }
  }
</style>
