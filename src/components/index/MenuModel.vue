<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <section class="card rounded-0 py-5 bg-white border-0">
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-2 g-sm-4">
        <div class="col">
          <div class="card border-0">
            <div class="card-body">
              <div class="card-title h3 border-bottom mb-0 pb-3 fw-bold">News</div>
              <ul class="list-unstyled" data-visible="all">
                <template v-for="(item, index) in menuList" :key="index">
                  <li class="border-bottom" v-if="item.category === 'news'">
                    <router-link
                      to="#"
                      class="d-flex align-items-center pt-3 flex-wrap flex-lg-nowrap text-decoration-none mouseOver"
                    >
                      <p class="text-nowrap mb-1">
                        <time datetime="2024-07-18">{{ item.date }}</time>
                      </p>
                      <p class="mx-3 text-nowrap mb-1">{{ item.category }}</p>
                      <h5 class="">
                        {{ item.title }}
                      </h5>
                    </router-link>
                  </li>
                </template>
              </ul>
              <div class="card-footer bg-body border-0 text-end">
                <router-link to="#" class="text-dark">查看更多<i class="bi bi-arrow-right-circle ms-1"></i></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-0">
            <div class="card-body">
              <div class="card-title h3 border-bottom mb-0 pb-3 fw-bold">Note</div>
              <ul class="list-unstyled" data-visible="all">
                <template v-for="(item, index) in menuList" :key="index">
                  <li class="border-bottom" v-if="item.category === 'note'">
                    <router-link
                      to="#"
                      class="d-flex align-items-center pt-3 flex-wrap flex-lg-nowrap text-decoration-none mouseOver"
                    >
                      <p class="text-nowrap mb-1">
                        <time datetime="2024-07-18">{{ item.date }}</time>
                      </p>
                      <p class="mx-3 text-nowrap mb-1">{{ item.category }}</p>
                      <h5 class="">
                        {{ item.title }}
                      </h5>
                    </router-link>
                  </li>
                </template>
              </ul>
              <div class="card-footer bg-body border-0 text-end">
                <router-link to="#" class="text-dark">查看更多<i class="bi bi-arrow-right-circle ms-1"></i></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.mouseOver {
  color: rgb(0, 0, 0, 0.5);
}
.mouseOver:hover {
  background-color: #f2f2f2;
  color: #000;
}
</style>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          date: '2024.07.18',
          category: 'news',
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
        },
        {
          date: '2024.07.17',
          category: 'news',
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
        },
        {
          date: '2024.07.17',
          category: 'news',
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
        },
        {
          date: '2024.07.17',
          category: 'news',
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
        },
        {
          date: '2024.07.17',
          category: 'news',
          title: '卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！',
        },
        {
          date: '2024.07.17',
          category: 'note',
          title: '筆記筆記好多筆記通通免費！！！',
        },
        {
          date: '2024.07.17',
          category: 'note',
          title: '筆記筆記好多筆記通通免費～～歐拉歐拉',
        },
        {
          date: '2024.07.17',
          category: 'note',
          title: '筆記筆記好多筆記通通免費～～木大木大',
        },
        {
          date: '2024.07.17',
          category: 'note',
          title: '講義講義新講義來下載',
        },
        {
          date: '2024.07.17',
          category: 'note',
          title: '講義講義新講義來下載！！！！！',
        },
      ],
    };
  },
  methods: {},
};
</script>
