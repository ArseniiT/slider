<template>
  <div class="slide">
    <img :src="`static/img/img${slide.id}.jpg`" alt="">
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      slide: Object
    }
  }
</script>
<style scoped>
  img {
    max-width: 100%;
  }
  .slide {
    display: inline-block;
  }
</style>
