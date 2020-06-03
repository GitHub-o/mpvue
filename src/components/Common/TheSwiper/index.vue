<template>
  <swiper
    class="the-swiper"
    indicator-dots
    autoplay
    circular
    indicator-active-color="rgba(250, 250, 250, .5)"
  >
    <block v-for="(item, idx) of list" :key="idx">
      <swiper-item>
        <img class="img" :src="item" alt="轮播图" srcset="/" />
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style scoped>
</style>
