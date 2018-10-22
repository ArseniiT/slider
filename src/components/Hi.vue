<template>
  
  <div>
    <!-- <link href="./" rel="stylesheet" type="text/css"> -->

    <button @click="show = !show">
      Переключить отрисовку
    </button>
    <transition 
    name="slide-fade"
    enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutRight">
      <p v-if="show">привет</p>
    </transition>
    <transition 
    name="slide"
    enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutRight">
      <p v-if="!show">пока</p>
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

</style>
