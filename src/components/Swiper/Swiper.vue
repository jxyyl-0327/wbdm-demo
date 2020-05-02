<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',

  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      defaule: true
    }
  },
  mounted () {
    const that = this
    /* eslint-disable */
    new Swiper(this.$el, {
      pagination: {
        el: ".swiper-pagination",
      },
      loop: this.loop,
      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      } : false,

      on: {
        slideChangeTransitionEnd: function () {
          that.$emit("change", this.realIndex);
        },
      },
    });
      /* exlint-disable */
  },
};
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 180px;
  margin: 0 auto;
}
</style>
