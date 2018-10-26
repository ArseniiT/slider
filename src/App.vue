<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Slides/>

  </div>
</template>

<script>
import Slides from './components/Slides'
export default {
  name: 'App',
  data () {
    return {
    msg: './assets/logo.png'
    }
  },
  components: {
    Slides
  },
}
</script>

<style>
body {
}

</style>
