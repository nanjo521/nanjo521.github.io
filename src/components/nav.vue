<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#top">My Resume</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">个人简介</b-nav-item>
          <b-nav-item href="#">专业技能</b-nav-item>
          <b-nav-item href="#">工作经历</b-nav-item>
          <b-nav-item href="#">项目经历</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss">
#nav {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
    transition: all 1.5s !important;

  .bg-info {
    background-color: transparent !important;
  }
  &:hover{
    background-color:#17A2B8 !important;
  }
}
.navbar-collapse {
  flex-grow: 0 !important;
}

@media screen and (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 2.5rem !important;
    padding-left: 2.5rem !important;
  }
}

@media screen and (min-width: 992px) {
  .navbar-expand-lg {
    justify-content: center !important;
  }
}
</style>