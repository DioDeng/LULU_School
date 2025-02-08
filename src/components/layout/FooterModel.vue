<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <!-- footer-top -->
  <section class="card rounded-0 py-sm-5 py-4" style="background-color: #1d1d1d">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-5 g-sm-4">
        <template v-for="(item, index) in menuList" :key="index">
          <div class="col">
            <div
              class="card border-0 rounded-0"
              style="background-color: #1d1d1d"
            >
              <div class="card-body">
                <div class="accordion d-sm-none" id="accordionExample">
                  <div>
                    <div
                      class="componySet btn w-100 border-0 p-0 mb-2"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse${index}`"
                      aria-expanded="false"
                      @click="toggleActive"
                    >
                      <h4 class="text-start text-light mb-0">
                        {{ item.title }}
                      </h4>
                      <span></span>
                      <span></span>
                    </div>
                    <div class="border-bottom"></div>
                    <div
                      :id="`collapse${index}`"
                      class="accordion-collapse collapse"
                    >
                      <div class="accordion-body px-0">
                        <div class="privacySet text-white-50">
                          <ul class="card-text list-unstyled">
                            <template
                              v-for="(data, key) in item.options"
                              :key="key"
                            >
                              <li class="mb-2 text-white-50 rwdBg">
                                -
                                <router-link class="text-white-50" to="#">{{
                                  data.title
                                }}</router-link>
                              </li>
                            </template>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-none d-sm-block">
                  <h4 class="card-title text-light">
                    {{ item.title }}<span></span>
                  </h4>
                  <div class="border-bottom mb-2"></div>
                  <ul class="card-text d-none d-sm-block list-unstyled">
                    <template v-for="(data, key) in item.options" :key="key">
                      <li class="mb-2 text-white-50">
                        -
                        <router-link class="text-white-50" to="#">{{
                          data.title
                        }}</router-link>
                      </li>
                    </template>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- footer-bottom -->
  <section
    class="card rounded-0 py-sm-5 py-4 text-light"
    style="background-color: #000"
  >
    <div class="container">
      <div class="mb-3">
        <h6>打造有效又好笑的課堂</h6>
        <h3>卷民Wrrrrry</h3>
      </div>
      <div class="d-sm-flex justify-content-between align-items-end mb-3">
        <div class="text-white-50 mb-3 mb-sm-0">
          <h6 class="mb-1">地址： 504彰化縣秀水鄉番花路331巷2-6號</h6>
          <h6 class="mb-0">TEL：096-362-5656 / FAX：096-362-56</h6>
        </div>
        <div class="mb-2">
          <a href="#" class="text-white-50"
            ><i class="bi bi-facebook h3"></i
          ></a>
          <a href="#" class="text-white-50 mx-4"
            ><i class="bi bi-instagram h3"></i
          ></a>
          <a href="#" class="text-white-50"><i class="bi bi-line h3"></i></a>
        </div>
      </div>
      <div class="border-bottom mb-3"></div>
      <div class="d-flex justify-content-between">
        <h6 class="mb-0">Sit By LULU</h6>
        <h6 class="mb-0">© LULU ALL RIGHTS RESERVED</h6>
      </div>
    </div>
  </section>
</template>

<style scoped>
.componySet {
  cursor: pointer;
  position: relative;
}
.componySet span:nth-child(2) {
  position: absolute;
  width: 16px;
  height: 2px;
  top: 50%;
  right: 0;
  background: #fff;
  transform: translateY(-50%);
}
.componySet span:nth-child(3) {
  position: absolute;
  width: 16px;
  height: 2px;
  transition: 0.5s;
  top: 50%;
  right: 0;
  background: #fff;
  /* #26498d */
  transform: translateY(-50%) rotate(90deg);
}
.toggleActive span:nth-child(3) {
  transform: translateY(-50%) rotate(0deg);
}
@media (max-width: 576px) {
  .rwdBg {
    background-color: #000;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: '關於卷民',
          options: [
            { title: '教學方針' },
            { title: '師資介紹' },
            { title: '教室介紹' },
          ],
        },
        {
          title: '課程表',
          options: [
            { title: '國中物理' },
            { title: '高中物理' },
            { title: '升學計畫' },
            { title: '備審計畫' },
          ],
        },
        {
          title: '題庫/講義',
          options: [
            { title: '課程講義' },
            { title: '歷屆題庫' },
            { title: '課堂筆記' },
          ],
        },
        {
          title: '相關問題',
          options: [
            { title: '老師帥嗎' },
            { title: '老師可以女裝嗎' },
            { title: '可以代考嗎？' },
          ],
        },
        {
          title: '預約聽課',
          options: [
            { title: 'facebook' },
            { title: 'Line' },
            { title: '09xxxxxxxx' },
          ],
        },
      ],
    };
  },
  methods: {
    toggleActive(e) {
      console.log(e.target);
      e.target.parentElement.classList.toggle('toggleActive');
    },
  },
};
</script>
