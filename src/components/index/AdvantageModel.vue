<template>
  <section class="card border-0 rounded-0 bg-white overflow-hidden pe-sm-5">
    <div
      class="text-white pt-5 ps-sm-5 advantageSit"
      style="'border-radius': '0 24px 0 0'"
      :style="{ backgroundImage: `url(${advantageBg})` }"
    >
      <h4 class="mb-2">卷民wrrrry的四大優勢</h4>
      <h2 class="mb-5 d-flex">
        <i
          class="fas fa-exclamation me-3"
          style="animation-delay: calc(1s * 0.1)"
          data-aos="animate__rotateInDownLeft"
        ></i>
        <span
          style="animation-delay: calc(1s * 0.2)"
          class="animate__animated animate__rotateInDownLeft"
          >爲</span
        >
        <span
          style="animation-delay: calc(1s * 0.3)"
          class="animate__animated animate__rotateInDownLeft"
          >何</span
        >
        <span
          style="animation-delay: calc(1s * 0.4)"
          class="animate__animated animate__rotateInDownLeft"
          >選</span
        >
        <span
          style="animation-delay: calc(1s * 0.5)"
          class="animate__animated animate__rotateInDownLeft"
          >擇</span
        >
        <span
          style="animation-delay: calc(1s * 0.6)"
          class="animate__animated animate__rotateInDownLeft"
          >捲</span
        >
        <span
          style="animation-delay: calc(1s * 0.7)"
          class="animate__animated animate__rotateInDownLeft"
          >民</span
        >
        <span
          style="animation-delay: calc(1s * 0.8)"
          class="animate__animated animate__rotateInDownLeft"
          >W</span
        >
        <span
          style="animation-delay: calc(1s * 0.9)"
          class="animate__animated animate__rotateInDownLeft"
          >r</span
        >
        <span
          style="animation-delay: calc(1s * 1)"
          class="animate__animated animate__rotateInDownLeft"
          >rrrry</span
        >
      </h2>
      <div>
        <template v-for="(item, index) in advantageList" :key="index">
          <div class="py-8 d-block text-dark text-decoration-none advantageBox">
            <div
              class="px-5 py-4 shadow-lg col-12 col-sm-5 animate__animated animate__fadeInDown"
              :class="`marginLeft-${index}`"
            >
              <h2 class="mb-2">
                #{{ index + 1 }} <span class="fs-1">{{ item.title }}</span>
              </h2>
              <h3 class="mb-0 text-black-50">
                {{ item.commit }}
              </h3>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marginLeft-0 {
  margin-left: 0%;
  background: hsla(0, 0%, 100%, 0.5);
}
.marginLeft-1 {
  margin-left: 10%;
  background: hsla(0, 0%, 100%, 0.6);
}
.marginLeft-2 {
  margin-left: 0%;
  background: hsla(0, 0%, 100%, 0.7);
}
.marginLeft-3 {
  margin-left: 10%;
  background: hsla(0, 0%, 100%, 0.8);
}
.advantageSit {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.advantageBox {
  border: 10px solid #fff;
  border-bottom: 0px;
}
@media (max-width: 576px) {
  .marginLeft-1 {
    margin-left: 0%;
  }
  .marginLeft-3 {
    margin-left: 0%;
    border-bottom: 10px solid #fff;
  }
}
</style>

<script setup>
import { ref } from 'vue'
import advantageBg from '../../assets/images/advantageBg.jpg'

const advantageList = ref([
  { title: '自由排課', commit: '彈性安排與教師的上課時間' },
  { title: '專屬課程', commit: '依照你的能力、需求進行備課' },
  { title: '免費試聽', commit: '獨家視聽，滿意再購買' },
  { title: '頂尖教師', commit: '世界各地頂尖教師任你選擇' },
])
</script>
