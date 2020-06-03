<template>
  <swiper
    :style="{height: 280 * (list[current].lessons.length) + 'rpx'}"
    class="the-swiper"
    :current="current"
    @change="onSwiperChange"
  >
    <block v-for="(item, i) of list" :key="i">
      <swiper-item>
        <HotCell
          v-for="(cItem, j) of item.lessons"
          :key="j"
          :item="cItem"
        />
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
import HotCell from '@/components/Common/HotCell'

export default {
  props: {
    list: Array,
    current: Number
  },

  components: {
    HotCell
  },

  methods: {
    onSwiperChange ({ mp: { detail: { current } } }) {
      this.$emit('update:current', current);
    }
  }
}
</script>

<style scoped>
.the-swiper {
  background-color: #fff;
}
</style>
