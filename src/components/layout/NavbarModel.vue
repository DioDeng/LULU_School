<template>
  <section
    class="container-fluid px-sm-5 pt-sm-4"
    :class="route.path === '/' ? 'positionSet' : ''"
    style="z-index: 1040"
  >
    <div class="row">
      <div class="col-12 col-lg-4 py-3 ps-3 p-sm-0" :class="classList.navBar">
        <router-link
          to="/"
          class="text-decoration-none"
          :class="route.path === '/' ? '' : 'text-dark'"
        >
          <span class="h5 d-none d-sm-block mb-0">打造有效又好笑的課堂<br /></span>
          <span class="h1 d-none d-sm-block">卷民Wrrrrry</span>
          <span class="h4 d-sm-none">卷民Wrrrrry</span>
        </router-link>
      </div>
      <div class="col-4 d-lg-block d-none text-nowrap">
        <ul class="list-unstyled d-flex justify-content-center align-items-center h-100">
          <li>
            <router-link
              to="/about"
              class="text-decoration-none d-flex"
              :class="route.path === '/' ? 'text-white' : 'text-dark'"
            >
              <div class="d-flex align-items-center hvr-icon-float-in">
                <h5 class="me-1">關於卷民</h5>
              </div>
            </router-link>
          </li>
          <li class="mx-5">
            <router-link to="/" class="text-decoration-none d-flex">
              <div
                class="d-flex align-items-center hvr-icon-float-in"
                :class="route.path === '/' ? 'text-white' : 'text-dark'"
              >
                <h5 class="me-1">課程表</h5>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="text-decoration-none d-flex">
              <div
                class="d-flex align-items-center hvr-icon-float-in"
                :class="route.path === '/' ? 'text-white' : 'text-dark'"
              >
                <h5 class="me-1">題庫/講義</h5>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-4 d-none d-lg-block">
        <ul class="list-unstyled d-flex justify-content-center align-items-center h-100">
          <li>
            <router-link
              to="/"
              class="text-decoration-none"
              :class="route.path === '/' ? 'text-white' : 'text-dark'"
              ><h6>相關問題</h6></router-link
            >
          </li>
          <li class="mx-3">
            <div class="dropdown">
              <button
                class="btn btn-link text-decoration-none"
                type="button"
                :class="route.path === '/' ? 'text-white' : 'text-dark'"
              >
                <h6>預約聽課</h6>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.positionSet {
  position: absolute;
}
.navSet a {
  color: #fff;
}
@media (max-width: 576px) {
  .positionSet {
    position: fixed;
  }
  .navSet {
    padding: 5.5px;
    a {
      color: #000;
    }
  }
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const classList = ref({ navBar: 'navSet' })
const route = useRoute()
// function toggleModal() {
//   this.dropdown.toggle()
// }
onMounted(() => {
  window.addEventListener('scroll', () => {
    const windowY = window.scrollY
    const breakpoint = document.getElementById('breakpoint')
    if (windowY > breakpoint.offsetTop / 8) {
      classList.value = {
        navBar: 'navSet bg-white',
      }
    } else {
      classList.value = {
        navBar: 'navSet',
      }
    }
  })
})
</script>
