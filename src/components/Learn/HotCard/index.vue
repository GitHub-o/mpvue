<template>
  <div
    class="hot-card"
    v-if="lessons && lessons.length > 0"
  >
    <ComTitle :title="title" :total="lessons.length" />

    <div class="hot-list">
      <ul class="list">
        <HotCell
          v-for="(item, idx) of lessons"
          :key="idx"
          :item="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import ComTitle from '@/components/Common/ComTitle'
import HotCell from '@/components/Common/HotCell'

export default {
  props: {
    lessons: Array,
    title: String
  },

  components: {
    ComTitle,
    HotCell
  }
}
</script>

<style scoped>
.hot-card {
  background-color: #fff;
  margin-top: 40rpx;
}
</style>
