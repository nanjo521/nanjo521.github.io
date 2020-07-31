<template>
  <div id="workex">
    <main>
      <h3>工作经历</h3>
      <div class="list">
        <div class="list-left">
          <strong>合肥谨宸网络科技有限公司</strong>
          <p class="tab">前端开发</p>
          <p>负责网站和手机终端的界面交互开发，为用户呈现最好的界面交互体验。</p>
          <p>配合设计师、产品人员实现产品UI和交互方面需求的开发，准确实现页面效果并保持良好兼容性；</p>
          <p>与后台开发工程师合作，完成并优化前端交互流程，优化代码，提高网页性能和用户体验；</p>
        </div>
        <div class="list-right">
            <div class="circle">
                <p>2019.7</p>
                <p>-</p>
                <p>2020.7</p>
            </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "workex",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 7.5rem 0;
}
.list {
  display: flex;
  justify-content: space-between;
  text-align: right;
}
.list-left {
  width: 50%;
  padding: 10px;
  strong {
    font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: white;
  }
  p{
      font-size: 0.8125rem;
      color: white;
      margin-bottom: 0;
  }
  
.tab {
  color: #e87e04;
}
}
.list-right {
  width: 50%;
  .circle{
      width: 7.5rem;
      height: 7.5rem;
      padding-top: 1.25rem;
      border-radius: 50%;
      background: rgb(255, 255, 255);
      box-shadow: 0 0 .3125rem rgba(0, 0, 0 , 0.3);
      p{
          margin-bottom: 0;
          text-align: center;
      }
  }
}
</style>