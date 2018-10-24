<template>
  <div id="app">
    <Slides />
  </div>
</template>

<script>
import Slides from './components/Slides.vue'

export default {
  name: 'app',
  components: {
    Slides
  }
}
</script>

<style lang="scss">
//@import "https://raw.githubusercontent.com/daneden/animate.css/master/animate.css";
#app {
  max-width: 900px;
}
</style>
