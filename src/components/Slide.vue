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
