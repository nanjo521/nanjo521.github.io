<template>
  <div id="app">
    <Nav></Nav>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/nav.vue'
import './assets/changeColor'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

Nav{
  position: fixed;
  top: 0;
}
</style>
