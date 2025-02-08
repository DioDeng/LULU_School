<template>
  <section class="container pt-5">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1)" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2)" data-aos="animate__rotateInDownLeft">學</span
      ><span style="animation-delay: calc(1s * 0.3)" data-aos="animate__rotateInDownLeft">費</span
      ><span style="animation-delay: calc(1s * 0.4)" data-aos="animate__rotateInDownLeft">方</span
      ><span style="animation-delay: calc(1s * 0.5)" data-aos="animate__rotateInDownLeft">案</span
      ><span style="animation-delay: calc(1s * 0.6)" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <!-- 廣告消息 -->
  <section class="fixedBottomRight m-5" data-aos="animate__bounceInLeft">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>成為苗栗國公民！</strong>
      凡事在求學階段成為我國公民，並放棄原國籍者，國家為你出所有費用！
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </section>
  <!-- 方案 -->
  <section class="container border-bottom">
    <div class="row border-top py-3">
      <div class="col-sm-4 col-1">
        <p class="h3">全繳<span class="h3 ms-sm-2 text-secondary">方案</span></p>
      </div>
      <div class="col-1 d-sm-none border-end"></div>
      <div class="col-sm-8 col-10">
        <div class="mb-5 border-bottom pb-5">
          <div class="d-flex align-items-center mb-2">
            <i class="fas fa-user-check h3 me-3"></i>
            <h3>苗栗國公民</h3>
          </div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">科目</th>
                <th scope="col">雜費</th>
                <th scope="col">學費</th>
                <th scope="col">註冊費</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">物理課程</th>
                <td>全額減免</td>
                <td>＄200,000</td>
                <td>＄1,500</td>
              </tr>
              <tr>
                <th scope="row">理化課程</th>
                <td>全額減免</td>
                <td>＄180,000</td>
                <td>＄1,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mb-4">
          <div class="d-flex align-items-center mb-2">
            <i class="fas fa-user-minus h3 me-3"></i>
            <h3>非本國公民</h3>
          </div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">科目</th>
                <th scope="col">雜費</th>
                <th scope="col">學費</th>
                <th scope="col">註冊費</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">物理課程</th>
                <td>＄20,000</td>
                <td>＄200,000</td>
                <td>＄1,500</td>
              </tr>
              <tr>
                <th scope="row">理化課程</th>
                <td>＄20,000</td>
                <td>＄180,000</td>
                <td>＄1,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row border-top py-3">
      <div class="col-sm-4 col-1">
        <p class="h3">半繳<span class="h3 ms-sm-2 text-secondary">方案</span></p>
      </div>
      <div class="col-1 d-sm-none border-end"></div>
      <div class="col-sm-8 col-10">
        <div class="mb-5 border-bottom pb-5">
          <div class="d-flex align-items-center mb-2">
            <i class="fas fa-user-check h3 me-3"></i>
            <h3>苗栗國公民</h3>
          </div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">科目</th>
                <th scope="col">雜費</th>
                <th scope="col">學費</th>
                <th scope="col">註冊費</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">物理課程</th>
                <td>全額減免</td>
                <td>＄100,000</td>
                <td>＄1,500</td>
              </tr>
              <tr>
                <th scope="row">理化課程</th>
                <td>全額減免</td>
                <td>＄90,000</td>
                <td>＄1,500</td>
              </tr>
            </tbody>
          </table>
          <h3 class="text-danger">未來十年固定抽取年薪3%</h3>
        </div>
        <div class="mb-4">
          <div class="d-flex align-items-center mb-2">
            <i class="fas fa-user-minus h3 me-3"></i>
            <h3>非本國公民</h3>
          </div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">科目</th>
                <th scope="col">雜費</th>
                <th scope="col">學費</th>
                <th scope="col">註冊費</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">物理課程</th>
                <td>＄20,000</td>
                <td>＄100,000</td>
                <td>＄1,500</td>
              </tr>
              <tr>
                <th scope="row">理化課程</th>
                <td>＄20,000</td>
                <td>＄90,000</td>
                <td>＄1,500</td>
              </tr>
            </tbody>
          </table>
          <h3 class="text-danger">未來十年固定抽取年薪5%</h3>
        </div>
      </div>
    </div>
    <div class="row border-top py-3">
      <div class="col-sm-4 col-1">
        <p class="h3">免繳<span class="h3 ms-sm-2 text-secondary">方案</span></p>
      </div>
      <div class="col-1 d-sm-none border-end"></div>
      <div class="col-sm-8 col-10">
        <div class="mb-5 border-bottom pb-5">
          <div class="d-flex align-items-center mb-2">
            <i class="fas fa-user-check h3 me-3"></i>
            <h3>苗栗國公民</h3>
          </div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">科目</th>
                <th scope="col">雜費</th>
                <th scope="col">學費</th>
                <th scope="col">註冊費</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">物理課程</th>
                <td>全額減免</td>
                <td>全額減免</td>
                <td>全額減免</td>
              </tr>
              <tr>
                <th scope="row">理化課程</th>
                <td>全額減免</td>
                <td>全額減免</td>
                <td>全額減免</td>
              </tr>
            </tbody>
          </table>
          <h3 class="text-danger">未來十年固定抽取年薪5%</h3>
        </div>
        <div class="mb-4">
          <div class="d-flex align-items-center mb-2">
            <i class="fas fa-user-minus h3 me-3"></i>
            <h3>非本國公民</h3>
          </div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">科目</th>
                <th scope="col">雜費</th>
                <th scope="col">學費</th>
                <th scope="col">註冊費</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">物理課程</th>
                <td>全額減免</td>
                <td>全額減免</td>
                <td>＄1,500</td>
              </tr>
              <tr>
                <th scope="row">理化課程</th>
                <td>全額減免</td>
                <td>全額減免</td>
                <td>＄1,500</td>
              </tr>
            </tbody>
          </table>
          <h3 class="text-danger">未來十年固定抽取年薪7%</h3>
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
