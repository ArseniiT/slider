<template>
  <div class="slide">
    <p>{{slide.title}}</p>
    <a :href="slide.src">
      <img :src="`static/img/img${slide.id}.jpg`" alt="">
    </a>

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
