<template>
  <section class="position-relative" style="height: 100vh">
    <section
      class="ms-4 text-white position-absolute animate__animated animate__bounceInDown"
      style="top: 40%; left: 10%; z-index: 2"
    >
      <p class="h6">Grow up. Turn professional.</p>
      <p class="h2 d-flex">
        <span
          style="animation-delay: calc(1s * 0.4)"
          class="animate__animated animate__rotateInDownLeft"
          >有</span
        ><span
          style="animation-delay: calc(1s * 0.6)"
          class="animate__animated animate__rotateInDownLeft"
          >趣</span
        ><span
          style="animation-delay: calc(1s * 0.8)"
          class="animate__animated animate__rotateInDownLeft"
          >的</span
        ><span
          style="animation-delay: calc(1s * 1)"
          class="animate__animated animate__rotateInDownLeft"
          >物</span
        ><span
          style="animation-delay: calc(1s * 1.2)"
          class="animate__animated animate__rotateInDownLeft"
          >理</span
        ><span
          style="animation-delay: calc(1s * 1.4)"
          class="animate__animated animate__rotateInDownLeft"
          >，</span
        >
      </p>
      <p class="h2 d-flex mb-4">
        <span
          style="animation-delay: calc(1s * 1.4)"
          class="animate__animated animate__rotateInDownRight"
          >由</span
        ><span
          style="animation-delay: calc(1s * 1.2)"
          class="animate__animated animate__rotateInDownRight"
          >我</span
        ><span
          style="animation-delay: calc(1s * 1)"
          class="animate__animated animate__rotateInDownRight"
          >們</span
        ><span
          style="animation-delay: calc(1s * 0.8)"
          class="animate__animated animate__rotateInDownRight"
          >展</span
        ><span
          style="animation-delay: calc(1s * 0.6)"
          class="animate__animated animate__rotateInDownRight"
          >現</span
        ><span
          style="animation-delay: calc(1s * 0.4)"
          class="animate__animated animate__rotateInDownRight"
          >。</span
        >
      </p>
      <p class="h6">
        教學多年的物理老師-俊民<br />來讓你體驗最有趣的物理學。<br />在這學習不在沒有障礙。<br />讓我們邁向超越自己鎖定的目標！
      </p>
    </section>
    <!-- 動態背景 -->
    <section class="swiperPosition">
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
        ><swiper-slide class="bgImg" :style="{ backgroundImage: `url(${headBg1})` }"></swiper-slide>
        <swiper-slide class="bgImg" :style="{ backgroundImage: `url(${headBg2})` }"></swiper-slide>
        <swiper-slide class="bgImg" :style="{ backgroundImage: `url(${headBg3})` }"></swiper-slide>
        <swiper-slide class="bgImg" :style="{ backgroundImage: `url(${headBg4})` }"></swiper-slide>
        <swiper-slide class="bgImg" :style="{ backgroundImage: `url(${headBg5})` }"></swiper-slide>
      </swiper>
    </section>
  </section>
</template>

<style>
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin-bottom: 20px;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 10%;
  left: 93.5%;
  top: 50%;
  transform: translatey(-50%);
}
.swiper-pagination-bullet {
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
}
.swiper-pagination-bullet-active {
  position: relative;
  background-color: rgba(255, 255, 255, 0);
}
.swiper-pagination-bullet-active::before {
  content: '';
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #fff;
  animation: border 5s;
}

.swiper-pagination-bullet-active::after {
  content: '';
  position: absolute;
  height: 1px;
  width: 0px;
  background-color: #fff;
  border-radius: 0;
  top: 50%;
  left: 50%;
  transform: translatey(-50%);
  animation: line 2s linear;
  animation-fill-mode: forwards;
}

@keyframes line {
  0% {
    width: 0px;
  }
  100% {
    width: 100px;
  }
}
@keyframes border {
  0% {
    padding: 15px;
  }
  50% {
    padding: 2px;
  }
  100% {
    padding: 15px;
  }
}
.bgImg {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  filter: blur(2px);
}
.swiperPosition {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
</style>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import headBg1 from '../../assets/images/header-03.jpg'
import headBg2 from '../../assets/images/header-04.jpg'
import headBg3 from '../../assets/images/header-00.jpg'
import headBg4 from '../../assets/images/header-02.jpg'
import headBg5 from '../../assets/images/header-01.jpg'

const modules = [Autoplay, Pagination]
</script>
