<template>
  <div>
    <full-page :options="options">
      <div class="section">
        <div class="box1">

          <div class="envato-animate">
            <span class="envato-balloon">W</span>
            <span class="envato-balloon">e</span>
            <span class="envato-balloon">l</span>
            <span class="envato-balloon">c</span>
            <span class="envato-balloon">o</span>
            <span class="envato-balloon">m</span>
            <span class="envato-balloon">e</span>
          </div>

          <p id="text" v-show="false">这里是一个稚嫩却充满激情的web前端工程师的网站</p>
          <p id="show"></p>
        </div>
      </div>
      <div class="section">
        <div class="box2">section2</div>
      </div>
      <div class="section">
        <div class="box3">section3</div>
      </div>
      <div class="section">
        <div class="box3">section3</div>
      </div>
      <div class="section">
        <div class="box3">section3</div>
      </div>
    </full-page>
  </div>
</template>
 
<script>

export default {
  name: "",
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: true,
        menu: "#menu",
        verticalCentered: true,
        fixedElements: ".nav",
        // navigation: true,
        // anchors: ['page1', 'page2', 'page3'],
        sectionsColor: [
          "#41b883",
          "#ff5f45",
          "#0798ec",
          "#fec401",
          "#1bcee6",
          "#ee1a59",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab",
        ],
      },
    };
  },
};
</script>
<style scopd>
  @import '../assets/styles.css';
  .box1{
    height: 100vh;
    background-image: url("../assets/wallhaven-eymzjk.jpg");
    background-size: cover;
    background-position: center center;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #show{
    padding-top: 100px;
  }
</style>