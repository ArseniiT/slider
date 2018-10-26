<template>
  <div class="slide">
    <h4>{{slide.title}}</h4>
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
    width:inherit;
    height:inherit;
  }
  .slide {
    display: inline-block;
  }
</style>
