<template>
  <section class="card bg-white border-0 rounded-0 p-5">
    <h2 class="mb-sm-5 mb-3 d-flex text-dark">
      <span
        style="animation-delay: calc(1s * 0.1)"
        class="animate__animated animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i
      ></span>
      <span
        style="animation-delay: calc(1s * 0.2)"
        class="animate__animated animate__rotateInDownLeft"
        >6</span
      >
      <span
        style="animation-delay: calc(1s * 0.3)"
        class="animate__animated animate__rotateInDownLeft"
        >大</span
      >
      <span
        style="animation-delay: calc(1s * 0.4)"
        class="animate__animated animate__rotateInDownLeft"
        >課</span
      >
      <span
        style="animation-delay: calc(1s * 0.5)"
        class="animate__animated animate__rotateInDownLeft"
        >程</span
      >
      <span
        style="animation-delay: calc(1s * 0.6)"
        class="animate__animated animate__rotateInDownLeft"
        >介</span
      >
      <span
        style="animation-delay: calc(1s * 0.7)"
        class="animate__animated animate__rotateInDownLeft"
        >紹</span
      >
    </h2>
    <!-- 平板電腦 一般 -->
    <div class="">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <template v-for="(item, index) in courseList" :key="index">
          <div class="" :class="item.ptSet">
            <div class="animate__animated animate__fadeInDown">
              <div class="card border-0 shadow">
                <div style="height: 4px" :style="{ background: item.color }"></div>
                <img :src="item.img" class="card-img-top rounded-0" alt="..." />
                <div class="card-body">
                  <div class="card-title fs-3">
                    {{ item.title }}
                  </div>
                  <p class="card-text">
                    {{ item.commit }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const courseList = ref([
  {
    title: '國中物理/理化',
    commit: '結合生活情境的趣味教學、詳細的概念解說、課後觀念確認，讓你用均一自學理化變得好簡單！',
    img: 'https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'linear-gradient(90deg, #ed3131, #ff744f)',
  },
  {
    title: '高中物理/理化',
    img: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    commit:
      '物體的運動. 牛頓三大運動定律. 生活中常見的力. 查看課程內容. 物質的組成與交互作用. 物質的組成. 原子的結構. 基本交互作用',
    color: 'linear-gradient(90deg, #fc841a, #fab82a)',
    ptSet: 'pt-lg-4',
  },
  {
    title: 'GRE 物理/理化',
    commit:
      'GRE物理測試（GRE Physics Test）是由美國教育測驗服務社（ETS）主辦的標準化考試。這項考試的範圍主要是美國大學物理學系本科前三年的課程內容。',
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'linear-gradient(90deg, #4ccb43, #9fd628)',
    ptSet: 'pt-lg-5',
  },
  {
    title: 'DSE 物理/理化',
    commit:
      'DSE）物理科是一門結合理論與實踐的科目，涵蓋廣泛的知識範疇，並要求學生具備良好的理解力和應用能力。',
    img: 'https://plus.unsplash.com/premium_photo-1667119473280-23ed9fb45573?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'linear-gradient(90deg, #59c6c0, #88ddf5)',
  },
  {
    title: 'IB 物理/理化',
    commit:
      'IB物理並不是一堂容易的課程，但假如學生對這門課有興趣，甚至大學想讀領域相關的主修，那你就應該要知道IB Physics SL和HL有什麼差別，以及應該如何選擇 ...',
    img: 'https://images.unsplash.com/photo-1675458134252-1968ac5ef177?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'linear-gradient(90deg, #7749a7, #b48ad4)',
    ptSet: 'pt-lg-4',
  },
  {
    title: 'GCSE 物理/理化',
    commit:
      'GCSE 物理（General Certificate of Secondary Education - Physics）是英國中學教育體系中的一門核心科目，適用於 14 至 16 歲的學生。此課程涵蓋物理學的基本概念，並培養學生的科學思維、實驗技能和問題解決能力。',
    img: 'https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'linear-gradient(90deg, #7747, #333)',
    ptSet: 'pt-lg-5',
  },
])
</script>
