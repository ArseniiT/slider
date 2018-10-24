<template>
  <div class="slides">
      <div  :style="{width: innerWidth + 'px', marginLeft: '-' + slidesInnerMarginLeft + 'px'}" class="slides-inner">

        <Slide  v-for="slide in slides"
                :key="slide.id"
                :slide="slide"
                :style="{width: singleWidth + 'px'}"
        />

      </div>
      <div class="navigation">
        <span @click="goToPrev">Prev</span>
        <span v-for="slide in slides" :key="slide.id">{{slide.id+1}}</span>
        <span @click="goToNext">Next</span>
      </div>
  </div>
</template>
<script>
  import Slide from './Slide';
  export default {
    data () {
      return {
        slides: [
          {id:0, title: 'Canadian tire menu'},
          {id:1, title: 'Kijiji infinity loader'},
          {id:2, title: 'Spring Boot CRUD Library'}
        ],
        innerWidth: 0,
        singleWidth: 0,
        currentIndex: 0
      }
    },
    computed: {
      slidesInnerMarginLeft() {
        return this.currentIndex * this.singleWidth
      }
    },
    methods: {
      goToPrev() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
          this.currentIndex = (this.slides.length - 1);
        }
      },
      goToNext() {
        this.currentIndex++;
        if(this.currentIndex === this.slides.length) {
          this.currentIndex = 0;
        }
      }
    },
    props: {
      itemsPerSlide: {
        type: null,
        default: 1
      }
    },
    components: {
      Slide: Slide
    },
    mounted() {
      this.$nextTick(() => {
        let singleWidth = this.$el.clientWidth / this.itemsPerSlide;
        this.$set(this.$data, 'singleWidth', singleWidth);
        this.$set(this.$data, 'innerWidth', singleWidth * this.slides.length);
      })
    }
  }
</script>
<style>
.slides {
  overflow: hidden;
  text-align: center;
}

</style>

