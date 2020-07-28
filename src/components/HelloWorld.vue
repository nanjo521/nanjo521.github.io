<template>
  <div>
    <full-page :options="options">
      <div class="section">
        <div class="box1">
          <div class="envato-animate">
            <span class="envato-balloon" v-for="(item,index) in balloon" :key="index">{{item}}</span>
          </div>
          <p id="text" v-show="false">这里是一个稚嫩却充满激情的web前端工程师的网站</p>
          <p id="show"></p>
          <a id="button" href="#">About me</a>
        </div>
      </div>
      <a name="introduce"></a>
      <div class="section blue">
        <div class="box2 whiteFont">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="9" md="6" class="wow rollIn">
                <h2>
                  我的简介
                  <span class="line"></span>
                </h2>
                <b-col>我的基本信息和一些自我介绍</b-col>
                <b-col>
                  <img src="../assets/1.jpg" alt />
                </b-col>
              </b-col>
              <b-col class="right wow flipInX" cols="9" md="6">
                <b-row>
                  <b-col>
                    <h3>基本信息和自我介绍</h3>
                  </b-col>
                  <div class="w-100"></div>
                  <b-col>
                    <h5>我是一名web前端开发工程师，目前居住在杭州</h5>
                  </b-col>
                  <div class="w-100"></div>
                  <b-col>
                    <p class="text">
                      我对待工作认真负责，善于沟通协调有较强的组织潜力与团队精神;活泼开
                      朗乐观上进有爱心并善于施教并行;上进心强勤于学习能不断提高自身的潜力与
                      综合素质。在未来的工作中，我将以充沛的精力，刻苦钻研的精神来努力工作，
                      稳定地提高自己的工作潜力，与公司同步发展。
                    </p>
                  </b-col>
                  <div class="w-100"></div>
                  <b-col>
                    <b-row>
                      <b-col cols="18" md="6">
                        <strong>姓名:</strong>
                        <span>张蒙恩</span>
                      </b-col>
                      <b-col cols="18" md="6">
                        <strong>工作经验:</strong>
                        <span>1年</span>
                      </b-col>
                      <div class="w-100"></div>
                      <b-col cols="18" md="6">
                        <strong>工作性质:</strong>
                        <span>全职</span>
                      </b-col>
                      <b-col cols="18" md="6">
                        <strong>到岗时间:</strong>
                        <span>1周内</span>
                      </b-col>
                      <div class="w-100"></div>
                      <b-col cols="18" md="6">
                        <strong>现住址:</strong>
                        <span>杭州市江干区</span>
                      </b-col>
                      <b-col cols="18" md="6">
                        <strong>年龄:</strong>
                        <span>22岁</span>
                      </b-col>
                      <div class="w-100"></div>
                      <b-col cols="18" md="6">
                        <strong>电话:</strong>
                        <span>17395717176</span>
                      </b-col>
                      <b-col cols="18" md="6">
                        <strong>邮箱:</strong>
                        <span>2218833060@qq.com</span>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
      <a name="skill"></a>
      <div class="section blue">
        <div class="box3 whiteFont">
          <b-container class="bv-example-row">
            <b-row>
              <b-col
                cols="18"
                class="wow slideInLeft"
              >精通HTML5+CSS3， 熟练使用Sass、Less ，CSS预处理器,高效开发维护页面；</b-col>
              <div class="w-100"></div>
              <b-col cols="18" class="wow slideInRight">熟练使用原生JavaScript,可以实现简单实用方法的封装；</b-col>
              <div class="w-100"></div>
              <b-col cols="18" class="wow slideInLeft">熟练使用原生JavaScript,可以实现简单实用方法的封装；</b-col>
              <div class="w-100"></div>
              <b-col
                cols="18"
                class="wow slideInRight"
              >熟练使用ES6语法，let、const，数组对象的解构赋值，箭头函数，symbol，set、map。对Promise 异步编程有一定的了解；</b-col>
              <div class="w-100"></div>
              <b-col
                cols="18"
                class="wow slideInLeft"
              >熟练使用Vue，包括vue-cli、vue-router、vuex、vue-axios 、element-ui全家桶搭建项目，完成路由跳转及组件通信，对组件进行封装，以及前后端的数据交互;</b-col>
              <div class="w-100"></div>
              <b-col
                cols="18"
                class="wow slideInRight"
              >熟练使用bootstrap, elementUI，element-admin，vant，swiper, jQuery, mock.js, wow.js等前端主流UI框架和常见效果插件；</b-col>
              <div class="w-100"></div>
              <b-col
                cols="18"
                class="wow slideInLeft"
              >熟练使用ajax，axios,了解fetch与后端进行快速的交互及联调，掌握跨域资源共享（CORS）,nginx代理跨域等跨域解决方案，实现在不重新加载整个页面的情况下与服务器交换数据并更新部分网页;</b-col>
              <div class="w-100"></div>
              <b-col cols="18" class="wow slideInRight">熟悉对微信小程序的项目开发，并且有相关的开发经验;</b-col>
              <div class="w-100"></div>
              <b-col cols="18" class="wow slideInLeft">熟悉uni-app,mui前端框架实现简单WebApp开发；</b-col>
              <div class="w-100"></div>
              <b-col
                cols="18"
                class="wow slideInRight"
              >熟悉使用Visual Studio Code，WebStorm，HBuilder X，Adobe Photoshop等工具对项目进行快速开发；</b-col>
            </b-row>
          </b-container>
        </div>
      </div>
      <div class="section blue">
        <div class="box4">

        </div>
      </div>
      <div class="section blue">
        <div class="box5">



        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      balloon:this.$store.state.balloon,
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: true,
        menu: "#menu",
        verticalCentered: true,
        fixedElements: ".nav",
        navigation: true,
        anchors: ["page1", "page2", "page3"],
        // sectionsColor: [
        //   "#41b883",
        //   "#ff5f45",
        //   "#0798ec",
        //   "#fec401",
        //   "#1bcee6",
        //   "#ee1a59",
        //   "#2c3e4f",
        //   "#ba5be9",
        //   "#b4b8ab",
        // ],
      },
    };
  },
};
</script>
<style scopd>
@import "../assets/styles.css";
.box1 {
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
#show {
  padding-top: 100px;
}

.line {
  overflow: hidden;
  border-bottom-style: solid;
  width: 128px;
  max-width: 160px;
  border-bottom-width: 5px;
  border-bottom-color: #f7eccb;
  margin-top: -10px;
  display: block;
  position: relative;
  right: auto;
  display: block;
  top: 0;
  float: none;
  height: 1px;
  margin: 0 auto;
}

.box2 {
  display: flex;
  flex-wrap: wrap;
}

.box2 img {
  width: 60%;
}

.right {
  text-align: left;
  margin-top: 50px;
}

.text {
  text-indent: 2em;
  text-align: justify;
  opacity: 0.8;
}
</style>