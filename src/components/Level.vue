<template>
  <nav class="level">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Total</p>
        <p class="title">{{total}}</p>
      </div>
    </div>

    <div class="level-item has-text-centered">
      <div v-show="following">
        <p class="heading">Following</p>
        <p class="title">{{following}}</p>
      </div>
    </div>

    <div class="level-item has-text-centered">
      <div v-show="followers">
        <p class="heading">Followers</p>
        <p class="title">{{followers}}</p>
      </div>
    </div>

    <div class="level-item has-text-centered">
      <div v-show="likes">
        <p class="heading">Likes</p>
        <p class="title">{{likes}}</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Level',

  props: {
    total: {
      type: String,
      required: false,
      default: '',
    },

    following: {
      type: String,
      required: false,
      default: '',
    },

    followers: {
      type: String,
      required: false,
      default: '',
    },

    likes: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style scoped>
  .title span {
    color: red;
  }

  .level {
    margin: 0 0 40px 0;
  }

  .level p {
    color: #89609E;
  }

  .section {
    min-height: 400px;
  }

  .heading {
    margin-bottom: 30px;
  }

  button {
    display: inline-block;
    margin-bottom: 5px;
  }
</style>
