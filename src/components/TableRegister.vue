<template>
  <div class="section">
    <div class="container">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Total</p>
            <p class="title">{{data.length}}</p>
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

      <table class="table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in data">
            <td>
              {{item.created_at | moment("DD/MM/YYYY")}}
            </td>

            <td>
              <a>{{item.email}}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',

  props: {
    data: {
      type: Array,
    },
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
  .section {
    min-height: 400px;
  }

  .heading {
    margin-bottom: 30px;
  }

  .title span {
    color: red;
  }

  .level {
    margin: 0 0 40px 0;
  }

  .level p {
    color: #89609E;
  }
</style>
