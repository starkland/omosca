<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" n>
      <!-- slides -->
      <swiper-slide v-for="item in slides">
        <div class="container">
          <div class="slide-text">
            <h1 class="title">{{item.title}}</h1>
            <h2 class="subtitle">{{item.description}}</h2>
          </div>
        </div>

        <figure>
          <img :src="item.image" :alt="item.title">
        </figure>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'Slide',

  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        mousewheelControl: false,
        paginationClickable: true,
        pagination: '.swiper-pagination',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
      },

      slides: [
        {
          title: 'Title 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, praesentium!',
          image: 'http://dummyimage.com/2024x720/4d494d/686a82.gif&text=placeholder+image',
        },

        {
          title: 'Title 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, praesentium!',
          image: 'http://dummyimage.com/2024x720/4d494d/686a82.gif&text=placeholder+image',
        },

        {
          title: 'Title 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, praesentium!',
          image: 'http://dummyimage.com/2024x720/4d494d/686a82.gif&text=placeholder+image',
        },
      ],
    };
  },

  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style scoped>
  .slide-text {
    position: absolute;
    z-index: 10;
    margin-top: 20%;
  }

  h1, h2 {
    color: #FFFFFF;
  }

  figure {
    z-index: 9;
    position: relative;
  }

  .swiper-button-prev {
    transform: rotate(180deg);
    background-image: url('../assets/images/icons/arrow.svg');
  }

  .swiper-button-next {
    background-image: url('../assets/images/icons/arrow.svg');
  }
</style>
