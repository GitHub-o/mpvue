<template>
  <div
    class="common-card"
    v-if="lessons && lessons.length > 0"
  >
    <ComTitle
      :title="title"
      :total="lessons.length"
      @on-more-click="onMoreClick"
    />

    <div class="scroll">
      <ul class="list">
        <ComCell
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
import ComCell from '@/components/Common/ComCell'

export default {
  props: {
    lessons: Array,
    title: String
  },

  components: {
    ComTitle,
    ComCell
  },

  methods: {
    onMoreClick () {
      wx.navigateTo({ url: '/pages/myLesson/main' });
    }
  }
}
</script>

<style scoped>
.common-card {
  margin-top: 40rpx;
  background-color: #fff;
}

.scroll {
  height: 295rpx;
  overflow: hidden;
}

.list {
  white-space: nowrap;
  margin-left: 20rpx;
  height: 350rpx;
  overflow-x: scroll;
}
</style>
