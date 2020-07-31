<template>
  <div id="project">
    <div class="main">
      <h3>项目经历</h3>
      <div class="project-list">
        <b-card-group deck>
          <b-row>
            <b-col cols="12" md="8">
              <b-card
                bg-variant="primary"
                header="项目一"
                header-tag="header"
                title="圣象家居网站"
                class="text-center left-in wow"
                text-variant="white"
              >
                <b-card-text>项目简述：圣象家居是大亚与圣象两大集团投巨资打造的全国性家居品牌，旗下包括圣象合雅木门、圣象美诗整体衣柜等一线家居品牌。网站主要展示圣象家居的产品，企业介绍，品牌近期新闻活动和加盟合作的相关事项。</b-card-text>
                <b-card-text>技术支持： Bootstrap+jQuery+wow.js+slick.js+city-data.js+animate.css</b-card-text>
              </b-card>
            </b-col>
            <b-col cols="12" md="8">
              <b-card
                bg-variant="primary"
                header="项目二"
                header-tag="header"
                title="易修管家"
                class="text-center right-in wow"
                text-variant="white"
                id="card2"
              >
                <b-card-text>
                  项目简述：
                  <br />易修管家是一款微信小程序。由专业师傅带领相关专业实习学生，为校内大学生提供手机换屏、换电池，电脑清灰，升级、重装系统等简单的维修服务。
                </b-card-text>
                <b-card-text>技术支持： html+css+JavaScript+juery+ajax</b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 1.875rem 0.625rem;
  margin: 1.875rem 0;
  // background: #626e7c13;
  h3 {
    margin-bottom: 1.25rem;
    text-align: center;
  }
}
.card-deck {
  margin: 1.875rem 0;
}

.row{
  display: flex;
  justify-content: center;
}

.card-deck .card {
    margin-top: 30px;
}

.row .bg-primary {
    background-color: #116991 !important;
}
</style>