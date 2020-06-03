<template>
  <scroll-view
    scroll-x
    class="scroll"
    :scroll-into-view="nav[idx].id"
    scroll-with-animation
  >
    <em
      class="item"
      v-for="(item, _idx) of nav"
      :class="{cur: idx === _idx}"
      :key="_idx"
      :id="item.id"
      @click="idx !== _idx && $emit('update:idx', _idx)"
    >{{item.name}}</em>
  </scroll-view>
</template>

<script>
export default {
  props: {
    nav: Array,
    idx: Number
  }
}
</script>

<style scoped>
.scroll {
  white-space: nowrap;
  background-color: #fff;
}

.item {
  display: inline-block;
  text-align: center;
  padding: 28rpx 50rpx;
  font-size: 34rpx;
}

.item.cur {
  color: cyan;
}
</style>
