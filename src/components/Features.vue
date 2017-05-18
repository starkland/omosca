<template>
  <div class="section">
    <section class="container">
      <div class="heading">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>

      <div class="columns content">
        <aside class="column">
          <h3>Title Here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laboriosam ad ratione deleniti praesentium a.</p>
        </aside>

        <aside class="column">
          <h3>Title Here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium perferendis temporibus corporis suscipit, officia quia.</p>
        </aside>

        <aside class="column">
          <h3>Title Here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sed quas veniam sapiente excepturi, quae.</p>
        </aside>
      </div>

      <div class="columns content">
        <aside class="column">
          <h3>Title Here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laboriosam ad ratione deleniti praesentium a.</p>
        </aside>

        <aside class="column">
          <h3>Title Here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium perferendis temporibus corporis suscipit, officia quia.</p>
        </aside>

        <aside class="column">
          <h3>Title Here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sed quas veniam sapiente excepturi, quae.</p>
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
    margin-bottom: 60px;
  }

  @keyframes moveBg {
    0% { background-position: 0 10%; }
    50% { background-position: 50% 40%; }
    100% { background-position: 100% 90%; }
  }
</style>
