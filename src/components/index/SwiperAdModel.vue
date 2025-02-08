<template>
  <section class="card bg-white border-0 ps-sm-4 py-2 adSet">
    <div class="card border border-0">
      <div class="card-body pb-0">
        <h6 class="text-black-50">- pick up</h6>
      </div>
    </div>
    <swiper
      :slidesPerView="1.3"
      :spaceBetween="0"
      :freeMode="true"
      :modules="modules"
      :breakpoints="swiperOptions.breakpoints"
      class="mySwiper px-2 px-sm-5 ps-sm-0"
    >
      <template v-for="(item, index) in adList" :key="index">
        <swiper-slide
          ><div class="card border-0">
            <div class="card-body">
              <router-link to="#" class="mouseOver text-decoration-none">
                <component :is="'wired-card'" elevation="3">
                  <img :src="item.img" class="card-img-top rounded" alt="..." />
                </component>
                <div class="d-flex justify-content-between align-items-center pt-2">
                  <h6 class="card-title text-start border-bottom w-100 pb-2 mb-0">
                    {{ item.title }}
                  </h6>
                  <i class="bi bi-arrow-right-short h4"></i></div
              ></router-link>
            </div></div
        ></swiper-slide>
      </template>
    </swiper>
  </section>
</template>

<style lang="scss" scoped>
.mouseOver h6,
i {
  color: rgb(0, 0, 0, 0.5);
}
.mouseOver:hover {
  div {
    background-color: #f2f2f2;
    color: #000;
  }
  img {
    opacity: 0.5;
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.adSet {
  border-radius: 12px 0 0 0;
  margin-top: -10%;
}
@media (max-width: 576px) {
  .adSet {
    border-radius: 0;
    margin-top: -20%;
  }
}
</style>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'wired-elements'

// import required modules
import { FreeMode } from 'swiper/modules'

export default {
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          767: {
            slidesPerView: 3.2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4.1,
            spaceBetween: 0,
          },
        },
      },
      adList: [
        {
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
          img: 'https://beyondarchitecture.jp/wp/wp-content/uploads/2017/07/unchiku_01.jpg',
        },
        {
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
          img: 'https://beyondarchitecture.jp/wp/wp-content/uploads/2018/06/magazine_thum11-1.jpg',
        },
        {
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
          img: 'https://beyondarchitecture.jp/wp/wp-content/uploads/2020/02/magazine_thum.jpg',
        },
        {
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
          img: 'https://beyondarchitecture.jp/wp/wp-content/uploads/2020/06/magazine_thum_covid-1.jpg',
        },
        {
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
          img: 'https://beyondarchitecture.jp/wp/wp-content/uploads/2020/01/magazine_thum_shiten01.jpg',
        },
        {
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
          img: 'https://beyondarchitecture.jp/wp/wp-content/uploads/2020/04/magazine_thum_mokei.jpg',
        },
        {
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
          img: 'https://beyondarchitecture.jp/wp/wp-content/uploads/2018/06/magazine_thum11-1.jpg',
        },
        {
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
          img: 'https://beyondarchitecture.jp/wp/wp-content/uploads/2019/08/magazine_thum_sento.jpg',
        },
      ],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode],
    }
  },
}
</script>
