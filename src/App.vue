<template>
  <div id="app">
    <Hi />
  </div>
</template>

<script>
import Hi from './components/Hi.vue'

export default {
  name: 'app',
  components: {
    Hi
  }
}
</script>

<style lang="scss">
//@import url("../node_modules/animate.css/animate.min.css");
//@import "https://raw.githubusercontent.com/daneden/animate.css/master/animate.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
