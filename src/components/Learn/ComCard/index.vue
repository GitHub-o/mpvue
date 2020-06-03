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

    <div class="btn-wrap">
      <button class="btn" @click="onMoreClick">进入课程</button>
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
  overflow: hidden;
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

.btn-wrap {
  margin: 40px 0 20px;
  text-align: center;
}

.btn {
  width: 60%;
  line-height: 40px;
  border-radius: 20px;
  border: 2px solid rgb(12, 237, 245);
  font-size: 15px;
  color: #fff;
}
</style>
