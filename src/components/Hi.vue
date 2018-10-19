<template>
  <div>
    <button @click="show = !show">
      Переключить отрисовку
    </button>
    <transition name="slide-fade">
      <p v-if="show">привет</p>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Hi',
  data: function() {
    return {
      show: true
    } 
  }
}
</script>

<style lang="scss">
@import url("../../node_modules/animate.css/animate.min.css");
//@import "https://raw.githubusercontent.com/daneden/animate.css/master/animate.css";
.slide-fade-enter-active {
  //transition: all .3s ease;
  /* animation: animated infinite bounce delay-2s; */
  @extend .animated, .infinite, .bounce, .delay-2s !optional;

  
}
.slide-fade-leave-active {
  /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
  /* animation: animated infinite bounce delay-2s; */
  //@extend .animated;
/*   @extend .bounce;
  @extend .infinite;
  @extend .delay-2s; */
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
