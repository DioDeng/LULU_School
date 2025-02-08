<template>
  <header>
    <Navbar />
    <HambugerMenu />
  </header>
  <router-view />
  <footer>
    <FooterLayout />
  </footer>
</template>

<script>
import Navbar from '@/components/layout/NavbarModel.vue'
import HambugerMenu from '@/components/layout/HambugerMenu.vue'
import FooterLayout from '@/components/layout/FooterModel.vue'

export default {
  components: { Navbar, HambugerMenu, FooterLayout },
}
</script>
