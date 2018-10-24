<template>
  <div class="slides">
    <div class="slides-inner">
      <div v-for="(slide,id) in slides" :key="id">
        <Slide v-bind:slide="slide"></Slide>
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
          {title: 'Canadian tire navigation menu',src: '@/static/img/img1.jpg'},
          {title: 'Kijiji infinity loader',src: 'static/img/img2.jpg'},
          {title: 'SpringBoot CRUD Library',src: 'static/img/img3.jpg'},
          {title: 'SPA VueJS IT news',src: 'static/img/img4.jpg'},
          {title: 'itBlog with PHP & MySQL',src: 'static/img/img5.jpg'}
        ]
      }
    },
    components: {
      Slide: Slide
    }
  }
</script>

<style scoped>
  
</style>
