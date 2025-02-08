<template>
  <section class="container pt-5">
    <p class="h1 d-flex">
      <span
        style="animation-delay: calc(1s * 0.1)"
        class="animate__animated animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span
        style="animation-delay: calc(1s * 0.2)"
        class="animate__animated animate__rotateInDownLeft"
        >關</span
      ><span
        style="animation-delay: calc(1s * 0.3)"
        class="animate__animated animate__rotateInDownLeft"
        >於</span
      ><span
        style="animation-delay: calc(1s * 0.4)"
        class="animate__animated animate__rotateInDownLeft"
        >卷</span
      ><span
        style="animation-delay: calc(1s * 0.5)"
        class="animate__animated animate__rotateInDownLeft"
        >民</span
      ><span
        style="animation-delay: calc(1s * 0.6)"
        class="animate__animated animate__rotateInDownLeft"
        >。</span
      >
    </p>
  </section>
  <section class="p-5 p-lg-7">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col animate__animated animate__bounceInLeft">
        <div class="btn p-0 border-0 mb-5">
          <router-link to="/about/introduce" class="text-decoration-none schoolSet">
            <img src="@/assets/images/school.jpg" alt="" class="" />
            <h4 class="d-flex justify-content-between border-bottom pt-3 ps-2">
              學校概要
              <span class="border-bottom pb-2 border-dark px-2"
                ><i class="fas fa-long-arrow-alt-right"></i
              ></span>
            </h4>
          </router-link>
        </div>
      </div>
      <div class="col animate__animated animate__bounceInDown">
        <div class="btn p-0 border-0 mb-5">
          <router-link to="/about/fee" class="schoolSet text-decoration-none">
            <img src="@/assets/images/surroundings.jpg" alt="" class="" />
            <h4 class="d-flex justify-content-between border-bottom pt-3 ps-2">
              學費相關
              <span class="border-bottom pb-2 border-dark px-2"
                ><i class="fas fa-long-arrow-alt-right"></i
              ></span>
            </h4>
          </router-link>
        </div>
      </div>
      <div class="col animate__animated animate__bounceInUp">
        <div class="btn p-0 border-0 mb-5">
          <router-link to="/about/teachers" class="schoolSet text-decoration-none">
            <img src="@/assets/images/profession.jpg" alt="" class="" />
            <h4 class="d-flex justify-content-between border-bottom pt-3 ps-2">
              教師職員介紹
              <span class="border-bottom pb-2 border-dark px-2"
                ><i class="fas fa-long-arrow-alt-right"></i
              ></span>
            </h4>
          </router-link>
        </div>
      </div>
      <div class="col animate__animated animate__bounceInRight">
        <div class="btn p-0 border-0 mb-5">
          <router-link to="/about/map" class="text-decoration-none schoolSet">
            <img src="@/assets/images/map.jpg" alt="" class="" />
            <h4 class="d-flex justify-content-between border-bottom pt-3 ps-2">
              交通位置
              <span class="border-bottom pb-2 border-dark px-2"
                ><i class="fas fa-long-arrow-alt-right"></i
              ></span>
            </h4>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.schoolSet {
  color: #555555;
}
.schoolSet:hover h4 {
  background: rgba(85, 85, 85, 0.2);
  color: #000;
}
</style>
