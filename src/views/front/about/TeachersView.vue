<template>
  <section class="container pt-5">
    <p class="h1 d-flex">
      <span
        style="animation-delay: calc(1s * 0.1)"
        class="animate__animated animate__rotateInDownLeft"
        ><i class="fas fa-exclamation mr-3"></i></span
      ><span
        style="animation-delay: calc(1s * 0.2)"
        class="animate__animated animate__rotateInDownLeft"
        >師</span
      ><span
        style="animation-delay: calc(1s * 0.3)"
        class="animate__animated animate__rotateInDownLeft"
        >資</span
      ><span
        style="animation-delay: calc(1s * 0.4)"
        class="animate__animated animate__rotateInDownLeft"
        >介</span
      ><span
        style="animation-delay: calc(1s * 0.5)"
        class="animate__animated animate__rotateInDownLeft"
        >紹</span
      ><span
        style="animation-delay: calc(1s * 0.6)"
        class="animate__animated animate__rotateInDownLeft"
        >。</span
      >
    </p>
  </section>
  <!-- bg -->
  <section
    class="mb-5"
    style="
      height: 400px;
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    "
    :style="{ backgroundImage: `url(${bg})` }"
  ></section>
  <!-- 教師列表 -->
  <!-- 1 -->
  <section class="p-5 p-sm-7">
    <div
      class="mb-3"
      style="background: linear-gradient(90deg, #ed3131, #ff744f); height: 4px"
    ></div>
    <h3 class="mb-4">國中物理</h3>
    <div class="row row-cols-1 row-cols-md-3 g-6">
      <template v-for="item in teachers" :key="item.id">
        <div class="col" v-if="item.category == 'ＩＴ'">
          <div class="card h-100 border-0">
            <img :src="item.imageUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title mb-3">
                {{ item.title }}<span class="ms-3 h4 text-secondary">{{ item.unit }}</span>
              </h3>
              <p class="card-text text-secondary fst-italic">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
  <!-- 2 -->
  <section class="p-5 p-sm-7">
    <div
      class="mb-3"
      style="background: linear-gradient(90deg, #fc841a, #fab82a); height: 4px"
    ></div>
    <h3 class="mb-4">高中物理</h3>
    <div class="row row-cols-1 row-cols-md-3 g-6">
      <template v-for="item in teachers" :key="item.id">
        <div class="col" v-if="item.category == '設計'">
          <div class="card h-100 border-0">
            <img :src="item.imageUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title mb-3">
                {{ item.title }}<span class="ms-3 h4 text-secondary">{{ item.unit }}</span>
              </h3>
              <p class="card-text text-secondary fst-italic">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
  <!-- 3 -->
  <section class="p-5 p-sm-7">
    <div
      class="mb-3"
      style="background: linear-gradient(90deg, #4ccb43, #9fd628); height: 4px"
    ></div>
    <h3 class="mb-4">CRE物理</h3>
    <div class="row row-cols-1 row-cols-md-3 g-6">
      <template v-for="item in teachers" :key="item.id">
        <div class="col" v-if="item.category == '時尚'">
          <div class="card h-100 border-0">
            <img :src="item.imageUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title mb-3">
                {{ item.title }}<span class="ms-3 h4 text-secondary">{{ item.unit }}</span>
              </h3>
              <p class="card-text text-secondary fst-italic">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
  <!-- 4 -->
  <section class="p-5 p-sm-7">
    <div
      class="mb-3"
      style="background: linear-gradient(90deg, #59c6c0, #88ddf5); height: 4px"
    ></div>
    <h3 class="mb-4">DSE物理</h3>
    <div class="row row-cols-1 row-cols-md-3 g-6">
      <template v-for="item in teachers" :key="item.id">
        <div class="col" v-if="item.category == '公職'">
          <div class="card h-100 border-0">
            <img :src="item.imageUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title mb-3">
                {{ item.title }}<span class="ms-3 h4 text-secondary">{{ item.unit }}</span>
              </h3>
              <p class="card-text text-secondary fst-italic">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
  <!-- 5 -->
  <section class="p-5 p-sm-7">
    <div
      class="mb-3"
      style="background: linear-gradient(90deg, #7749a7, #b48ad4); height: 4px"
    ></div>
    <h3 class="mb-4">IB/GSC物理</h3>
    <div class="row row-cols-1 row-cols-md-3 g-6">
      <template v-for="item in teachers" :key="item.id">
        <div class="col" v-if="item.category == '家庭'">
          <div class="card h-100 border-0">
            <img :src="item.imageUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title mb-3">
                {{ item.title }}<span class="ms-3 h4 text-secondary">{{ item.unit }}</span>
              </h3>
              <p class="card-text text-secondary fst-italic">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
  <section class="d-flex justify-content-center p-7 mb-4">
    <router-link
      to="/about"
      class="text-decoration-none text-dark"
      data-aos="animate__animated animate__bounceInLeft"
    >
      <i class="fas fa-chevron-circle-left h1"></i>
    </router-link>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import bg from '../../../assets/images/teachers-01.jpg'

const teachers = ref([])

function getData() {
  const url = 'https://vue3-course-api.hexschool.io/api/lulu_school/products/all'
  axios.get(url).then((res) => {
    teachers.value = res.data.products
  })
}

onMounted(() => {
  getData()
})
</script>
