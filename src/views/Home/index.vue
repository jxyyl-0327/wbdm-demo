<template>
  <div class="page-home">
    <!-- 首页头部 -->
    <div class="header">
      <div class="header-left">
        <img src="../../assets/icon/logo.png" alt="" />
      </div>
      <div class="header-right">
        <div class="header-sex">
          <img src="../../assets/icon/girl.png" alt="" />
        </div>
        <div class="header-search">
          <img src="../../assets/icon/search.png" alt="" />
        </div>
        <div class="my">
          <img src="../../assets/icon/mine.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 首页轮播图 -->
    <Swiper @change="onChange" class="my-swiper">
      <SwiperItem>
        <img
          src="https://img.manhua.weibo.com/client/2020/04/14/gU3Vg3gU.jpg"
          alt=""
        />
      </SwiperItem>
      <SwiperItem>
        <img
          src="https://img.manhua.weibo.com/client/2020/04/14/gU3Vg3gU.jpg"
          alt=""
        />
      </SwiperItem>
      <SwiperItem>
        <img
          src="https://img.manhua.weibo.com/client/2020/04/14/gU3Vg3gU.jpg"
          alt=""
        />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'

export default {
  name: 'Home',

  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    onChange (index) {
      console.log(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-wrap: wrap;
  width: 380px;
  .header {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .header-left {
      width: 100px;
      height: 24px;
      img {
        width: 87px;
        height: 24px;
        margin-left: 16px;
      }
    }
    .header-right {
      width: 114px;
      height: 38px;
      display: flex;
      align-items: center;
      img {
        width: 38px;
        height: 38px;
        font-size: 25px;
        line-height: 38px;
        text-align: center;
      }
    }
  }
  .my-swiper img{
    width: 100%;
  }
}
</style>
