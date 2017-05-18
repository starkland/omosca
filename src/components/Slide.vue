<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <h3>I'm Slide 1</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, totam.</span>

        <figure>
          <img src="http://dummyimage.com/2024x640/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image">
        </figure>
      </swiper-slide>

      <swiper-slide>
        <h3>I'm Slide 2</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, totam.</span>

        <figure>
          <img src="http://dummyimage.com/2024x640/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image">
        </figure>
      </swiper-slide>

      <swiper-slide>
        <h3>I'm Slide 3</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, totam.</span>

        <figure>
          <img src="http://dummyimage.com/2024x640/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image">
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
    };
  },

  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style scoped></style>
