<template>
  <section class="container pt-5">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1)" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2)" data-aos="animate__rotateInDownLeft">交</span
      ><span style="animation-delay: calc(1s * 0.3)" data-aos="animate__rotateInDownLeft">通</span
      ><span style="animation-delay: calc(1s * 0.4)" data-aos="animate__rotateInDownLeft">位</span
      ><span style="animation-delay: calc(1s * 0.5)" data-aos="animate__rotateInDownLeft">置</span
      ><span style="animation-delay: calc(1s * 0.6)" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2138.126064985314!2d121.01676083421488!3d24.833205322389762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346836e9eb18d8bf%3A0x985e9f46212a6b03!2z57ay5aO56Zu756u2LeerueWMl-W6lw!5e0!3m2!1szh-TW!2stw!4v1622012442424!5m2!1szh-TW!2stw"
    width="100%"
    height="400px"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    class="p-sm-7"
    title="地圖"
  ></iframe>
  <section class="px-sm-7 p-5 mb-5">
    <h4 class="mb-2">苗栗國補教王-專修學校 未來創造學院</h4>
    <h5>
      〒360 苗栗市xxxxxxx<br />
      TEL：0968-911-231 / FAX：0968-911-231
    </h5>
  </section>
  <section class="px-md-7 px-sm-5 px-2 border-bottom">
    <div class="row border-top py-5">
      <div class="col-4 d-flex align-items-center">
        <p class="h3 d-none d-sm-block mapSet">
          苗栗國機場<span class="h3 ms-2 text-secondary">出發</span>
        </p>
        <p class="h3 d-sm-none mapSet">
          苗<br />栗<br />國<br />機<br />場<span class="h3 ms-2 text-secondary">出發</span>
        </p>
      </div>
      <div class="col-8">
        <div class="mb-5 border-bottom pb-5">
          <div class="d-flex align-items-center mb-2">
            <i class="fas fa-car-alt h3 me-3"></i>
            <h3>開車</h3>
          </div>
          <div class="text-secondary">大約需要10分鐘，我們提供免費停車位，請向櫃檯領取停車證</div>
        </div>
        <div class="">
          <div class="d-flex align-items-center mb-2">
            <i class="fas fa-bus h3 me-3"></i>
            <h3>公車</h3>
          </div>
          <div class="text-secondary">
            從機場公車站3號站台搭乘113號公車往“鬍渣貓貓”，在“客家貓貓站”下車。徒步3分鐘後即可抵達。
          </div>
        </div>
      </div>
    </div>
    <div class="row border-top py-5">
      <div class="col-4 d-flex align-items-center">
        <p class="h3 d-none d-sm-block mapSet">
          苗栗火車站<span class="h3 ms-2 text-secondary">出發</span>
        </p>
        <p class="h3 d-sm-none mapSet">
          苗<br />栗<br />火<br />車<br />站<span class="h3 ms-2 text-secondary">出發</span>
        </p>
      </div>
      <div class="col-8">
        <div class="mb-5 border-bottom pb-5">
          <div class="d-flex align-items-center mb-2">
            <i class="fas fa-walking h3 me-3 px-1"></i>
            <h3>徒步</h3>
          </div>
          <div class="text-secondary">
            在西勢美街左轉，沿著對街前往貓貍山十字路口。從步行約2分鐘。
          </div>
        </div>
        <div class="">
          <div class="d-flex align-items-center mb-2">
            <i class="fa-solid fa-person-biking h3 me-3"></i>
            <h3>Ubike</h3>
          </div>
          <div class="text-secondary">苗栗國有專屬自行車車道，抵達後有專屬Ubike車位可以退租。</div>
        </div>
      </div>
    </div>
    <div class="row border-top py-5">
      <div class="col-4 d-flex align-items-center">
        <p class="h3 d-none d-sm-block mapSet">
          苗栗高鐵站<span class="h3 ms-2 text-secondary">出發</span>
        </p>
        <p class="h3 d-sm-none mapSet">
          苗<br />栗<br />高<br />鐵<br />站<span class="h3 ms-2 text-secondary">出發</span>
        </p>
      </div>
      <div class="col-8">
        <div class="mb-5 border-bottom pb-5">
          <div class="d-flex align-items-center mb-2">
            <i class="fas fa-subway h3 me-3"></i>
            <h3>電車</h3>
          </div>
          <div class="text-secondary">
            從高鐵站3號出口搭乘電車往“苗栗火車站”大約需要4分鐘，到達車站後步行約2分鐘。
          </div>
        </div>
        <div>
          <div class="d-flex align-items-center mb-2">
            <i class="fas fa-bus h3 me-3"></i>
            <h3>公車</h3>
          </div>
          <div class="text-secondary">
            從高鐵站1號出口搭乘72號公車往“麻吉喵”，在“客家貓貓站”下車。徒步3分鐘後即可抵達。
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="d-flex justify-content-center p-sm-7 p-5 mb-4">
    <router-link
      to="/about"
      class="text-decoration-none text-dark animate__animated animate__bounceInLeft"
    >
      <i class="fas fa-chevron-circle-left h1"></i>
    </router-link>
  </section>
</template>

<style scoped>
.mapSet {
  color: #12a0e5;
}
</style>
