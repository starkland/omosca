<template>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="heading">
              <h1 class="title">Section</h1>
              <h2 class="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
              </h2>
            </div>
          </div>

          <div class="column">
            <div class="field has-addons">
              <p class="control is-expanded">
                <input
                  class="input is-medium"
                  type="text"
                  placeholder="Cadastre seu e-mail para receber acesso antecipado.">
              </p>

              <p class="control">
                <a class="button is-primary is-medium">
                  Enviar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
};
</script>

<style scoped></style>
