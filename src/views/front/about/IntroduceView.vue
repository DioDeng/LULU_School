<template>
  <section class="p-sm-7 pt-7 p-5">
    <p class="h1 d-flex">
      <span
        style="animation-delay: calc(1s * 0.1)"
        class="animate__animated animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span
        style="animation-delay: calc(1s * 0.2)"
        class="animate__animated animate__rotateInDownLeft"
        >學</span
      ><span
        style="animation-delay: calc(1s * 0.3)"
        class="animate__animated animate__rotateInDownLeft"
        >校</span
      ><span
        style="animation-delay: calc(1s * 0.4)"
        class="animate__animated animate__rotateInDownLeft"
        >概</span
      ><span
        style="animation-delay: calc(1s * 0.5)"
        class="animate__animated animate__rotateInDownLeft"
        >要</span
      ><span
        style="animation-delay: calc(1s * 0.6)"
        class="animate__animated animate__rotateInDownLeft"
        >。</span
      >
    </p>
  </section>
  <!-- 教育方針 -->
  <section class="text-center container mb-5">
    <div class="row flex-column align-items-center">
      <div class="col mb-3">
        <h3 class="mb-sm-4 mb-3">與時俱進</h3>
      </div>
      <div class="col mb-6">
        <h2>「高專業性」<span class="h3">以及</span>「豐富人力」<span class="h3">的培養</span></h2>
      </div>
      <div class="col">
        <h5 class="mb-2">以我校「進取」、「互助」的課程為基礎，</h5>
        <h5 class="mb-2">在以校長、理事長為核心的指導體制下，</h5>
        <h5 class="mb-2">以培養與時俱進的「高專業性」和「豐富人力」為目標</h5>
        <h5 class="mb-2">所有教職員工共同努力，每天穩定地實踐每一項教育活動。</h5>
        <h5 class="mb-2">培養永遠向前看的夢想之人，你的夢想由我們培養。</h5>
        <h5 class="mb-2">教育出實力雄厚、真正能為社會做出貢獻的人才。</h5>
      </div>
    </div>
  </section>
  <section class="col-6 mx-auto">
    <table class="table text-center mb-5 align-middle">
      <tbody>
        <tr>
          <th scope="row">學校名</th>
          <td>苗栗國補教王-專修學校未來創造學院 呼嚕貓教育學校</td>
        </tr>
        <tr>
          <th scope="row">校長</th>
          <td>呼嚕貓</td>
        </tr>
        <tr>
          <th scope="row">地址</th>
          <td colspan="2">苗栗市xxxxxx</td>
        </tr>
        <tr>
          <th scope="row">電話</th>
          <td colspan="2">0968911231</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="p-5 p-sm-7">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card h-100 border-0">
          <img src="@/assets/images/teacher-01.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">校長-呼嚕貓</h5>
            <p class="card-text">國家級重要教育人才，任何領域都能見到校長的影子。</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 border-0">
          <img src="@/assets/images/teacher-02.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">主任-可憐貓奴</h5>
            <p class="card-text">每天負責照料呼嚕校長的生活。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="d-flex justify-content-center p-7 mb-4">
    <router-link
      to="/about"
      class="text-decoration-none text-dark animate__animated animate__bounceInLeft"
    >
      <i class="fas fa-chevron-circle-left h1"></i>
    </router-link>
  </section>
</template>
