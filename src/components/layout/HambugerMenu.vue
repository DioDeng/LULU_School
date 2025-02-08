<template>
  <div class="menuBtnDown menu-button" :class="{ 'bg-dark': darkBg }" style="z-index: 9999">
    <button type="button" class="btn border-0 rounded-0 p-3 p-sm-5" ref="menu" @click="toggleModal">
      <div class="bar" :class="this.$route.path === '/' ? 'barWhite' : 'barDark'"></div>
      <div class="bar" :class="this.$route.path === '/' ? 'barWhite' : 'barDark'"></div>
      <div class="bar" :class="this.$route.path === '/' ? 'barWhite' : 'barDark'"></div>
    </button>
  </div>
  <div
    class="offcanvas offcanvas-end hambugSet"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-scroll="true"
    aria-labelledby="offcanvasExampleLabel"
    ref="modal"
  >
    <div class="offcanvas-body d-flex flex-column justify-content-between pt-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 g-sm-4">
          <template v-for="(item, index) in menuList" :key="index">
            <div class="col">
              <div class="card border-0 rounded-0">
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
                        <h4 class="text-start text-dark mb-0">
                          {{ item.title }}
                        </h4>
                        <span></span>
                        <span></span>
                      </div>
                      <div class="border-bottom"></div>
                      <div
                        :id="`collapse${index}`"
                        class="accordion-collapse collapse"
                        :class="{ show: index === 0 }"
                      >
                        <div class="accordion-body px-0">
                          <div class="privacySet text-black-50">
                            <ul class="card-text list-unstyled">
                              <template v-for="(data, key) in item.options" :key="key">
                                <li class="mb-2 text-black-50 rwdBg">
                                  -
                                  <router-link class="text-black-50" to="#">{{
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
                    <h4 class="card-title text-dark">{{ item.title }}<span></span></h4>
                    <div class="border-bottom mb-2"></div>
                    <ul class="card-text d-none d-sm-block list-unstyled">
                      <template v-for="(data, key) in item.options" :key="key">
                        <li class="mb-2 text-black-50">
                          -
                          <router-link class="text-black-50" to="#">{{ data.title }}</router-link>
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
      <div class="d-flex justify-content-center">
        <a href="#" class="text-black-50"><i class="bi bi-facebook h3"></i></a>
        <a href="#" class="text-black-50 mx-4"><i class="bi bi-instagram h3"></i></a>
        <a href="#" class="text-black-50"><i class="bi bi-line h3"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menuBtnDown {
  top: 0;
  right: 0;
}
.hambugSet {
  min-width: 70%;
}
.menuBtnDown:hover {
  background-color: #000;
}

@media (max-width: 576px) {
  .hambugSet {
    min-width: 100%;
  }
  .menuBtnDown {
    background-color: #000;
  }
  .cross .bar:nth-of-type(1) {
    background-color: #fff;
  }
  .cross .bar:nth-of-type(3) {
    background-color: #fff;
  }
  .btnBgSet {
    background-color: #fff;
  }
}

.menu-button {
  position: fixed;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.menu-button .bar:nth-of-type(1) {
  margin-top: 0px;
}
.menu-button .bar:nth-of-type(3) {
  margin-bottom: 0px;
}
.bar {
  position: relative;
  display: block;
  width: 30px;
  height: 2px;
  margin: 8px auto;
  border-radius: 10px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.barWhite {
  background-color: #fff;
}
.barDark {
  background-color: #333;
}
.menu-button:hover .bar:nth-of-type(1) {
  -webkit-transform: translateY(1.5px) rotate(-4.5deg);
  -ms-transform: translateY(1.5px) rotate(-4.5deg);
  transform: translateY(1.5px) rotate(-4.5deg);
  background-color: #fff;
}
.menu-button:hover .bar:nth-of-type(2) {
  opacity: 0.9;
}
.menu-button:hover .bar:nth-of-type(3) {
  -webkit-transform: translateY(-1.5px) rotate(4.5deg);
  -ms-transform: translateY(-1.5px) rotate(4.5deg);
  transform: translateY(-1.5px) rotate(4.5deg);
  background-color: #fff;
}
.cross .bar:nth-of-type(1) {
  -webkit-transform: translateY(10px) rotate(-45deg);
  -ms-transform: translateY(10px) rotate(-45deg);
  transform: translateY(10px) rotate(-45deg);
  background-color: #000;
}
.cross .bar:nth-of-type(2) {
  opacity: 0;
}
.cross .bar:nth-of-type(3) {
  -webkit-transform: translateY(-10px) rotate(45deg);
  -ms-transform: translateY(-10px) rotate(45deg);
  transform: translateY(-10px) rotate(45deg);
  background-color: #000;
}
.cross:hover .bar:nth-of-type(1) {
  -webkit-transform: translateY(10px) rotate(-35deg);
  -ms-transform: translateY(10px) rotate(-35deg);
  transform: translateY(10px) rotate(-35deg);
}
.cross:hover .bar:nth-of-type(2) {
  opacity: 0;
}
.cross:hover .bar:nth-of-type(3) {
  -webkit-transform: translateY(-10px) rotate(35deg);
  -ms-transform: translateY(-10px) rotate(35deg);
  transform: translateY(-10px) rotate(35deg);
}

.componySet span:nth-child(2) {
  position: absolute;
  width: 16px;
  height: 2px;
  top: 50%;
  right: 0;
  background: #000;
  transform: translateY(-50%);
}
.componySet span:nth-child(3) {
  position: absolute;
  width: 16px;
  height: 2px;
  transition: 0.5s;
  top: 50%;
  right: 0;
  background: #000;
  /* #26498d */
  transform: translateY(-50%) rotate(90deg);
}
.toggleActive span:nth-child(3) {
  transform: translateY(-50%) rotate(0deg);
}
</style>

<script>
import { Offcanvas } from 'bootstrap'

export default {
  data() {
    return {
      darkBg: false,
      menuList: [
        {
          title: '關於卷民',
          options: [{ title: '教學方針' }, { title: '師資介紹' }, { title: '教室介紹' }],
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
          options: [{ title: '課程講義' }, { title: '歷屆題庫' }, { title: '課堂筆記' }],
        },
        {
          title: '相關問題',
          options: [{ title: '老師帥嗎' }, { title: '老師可以女裝嗎' }, { title: '可以代考嗎？' }],
        },
        {
          title: '預約聽課',
          options: [{ title: 'facebook' }, { title: 'Line' }, { title: '09xxxxxxxx' }],
        },
      ],
    }
  },
  methods: {
    toggleModal() {
      const addCross = this.$refs.menu
      //   判斷是否有cross類別
      addCross.classList.toggle('cross')
      addCross.classList.toggle('btnBgSet')
      this.offcanvas.toggle()
    },
  },
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.modal)
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY
      const windowX = window.innerWidth
      const breakpoint = document.getElementById('breakpoint')
      console.log(windowX)
      if (windowY > breakpoint.offsetTop && windowX > 576) {
        this.darkBg = true
      } else {
        this.darkBg = false
      }
    })
  },
}
</script>
