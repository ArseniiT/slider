<template>
  <div class="slides"
    @mouseleave="mouseLeave"
    @mouseover="mouseOver">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

      <div  :style="{width: innerWidth + 'px', marginLeft: '-' + slidesInnerMarginLeft + 'px'}" class="slides-inner">

        <Slide  v-for="slide in slides"
                :key="slide.id"
                :slide="slide"
                :style="{width: singleWidth + 'px'}"
        />

      </div>

      <ul class="navigation pagination">
        <!-- <span @click="goToPrev">Prev</span> -->
        <li class="waves-effect left-right" @click="goToPrev"><i class="material-icons">&lt;</i></li>
        <li class="waves-effect m-nav "
          v-for="slide in slides"
          :key="slide.id"
          :class="[slide.id === currentIndex ? 'active' : '']"
          @click="goToSlideIndex(slide.id)"
          >
          {{slide.id+1}}
        </li>
        <li class="waves-effect left-right" @click="goToNext"><i class="material-icons">&gt;</i></li>
        <!-- <span @click="goToNext">Next</span> -->
      </ul>
  </div>
</template>
<script>
  import Slide from './Slide';
  import Projects from './projects.json';

  export default {
    data () {
      return {
        slides: Projects,
        innerWidth: 0,    // width of all slides
        singleWidth: 0,   // width of one slide
        currentIndex: 0,  // index of current slide
        mouseOut: true    // is mouse outside of the slides div for continuing slides auto changing
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
      },
      goToSlideIndex(id) {
        this.currentIndex = id;
      },
      mouseLeave() {
        this.mouseOut = true;
      },
      mouseOver() {
        this.mouseOut = false;
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
        let that = this;

        // slide possition
        let singleWidth = this.$el.clientWidth / this.itemsPerSlide;
        this.$set(this.$data, 'singleWidth', singleWidth);
        this.$set(this.$data, 'innerWidth', singleWidth * this.slides.length);

        // slide auto changing
        window.setInterval(function () {
          if(that.mouseOut) {
            ++that.currentIndex;
            if(that.currentIndex === that.slides.length){
              that.currentIndex = 0;
            }
          }
        }, 3000);

        window.addEventListener('keyup', function(event) {
          if (event.keyCode === 37) { // left key
            that.goToPrev();
          }
          if (event.keyCode === 39) { // right key
            that.goToNext();
          }
        });
      })
    }
  }
</script>
<style>
.slides {
  position: relative;
  display: block;
  overflow: hidden;
  text-align: center;
  /* border: 5px solid black; */
  width: 1000px;
  margin: auto;
}
.slides-inner {
  transition: margin 0.8s ease-out;
}

.prev {
  padding-top: -50%;
}

.m-nav {
  padding: 0 10px;
  line-height: 30px;
}
.active {
  background-color: #ffec0b !important;
}
.left-right{
  padding: 0 10px;
  line-height: 26px;
}

</style>

