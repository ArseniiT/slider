<template>
  <div class="slides">
    <div class="slides-inner">
      <div v-for="slide in slides" :key="slide.id">
        <Slide :slide="slide" />
      </div>
    </div>
  </div>
</template>
<script>
  import Slide from './Slide';
  export default {
    data () {
      return {
        slides: [
          {id:1, title: 'Canadian tire menu'},
          {id:2, title: 'Kijiji infinity loader'},
          {id:3, title: 'Spring Boot CRUD Library'}
        ]
      }
    },
    components: {
      Slide: Slide
    }
  }
</script>
<style>

</style>

