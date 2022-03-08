<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <aa></aa>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import aa from "./components/aa.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    aa,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
