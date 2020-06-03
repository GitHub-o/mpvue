<template>
  <div
    class="my-lesson"
    v-if="lessons && lessons.length > 0"
  >
    <ul class="list">
      <SubItem
        v-for="(item, idx) of lessons"
        :key="idx"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import SubItem from './Sub'

export default {
  props: {
    lessons: Array
  },

  components: {
    SubItem
  }
}
</script>


<style scoped>
.my-lesson {
  margin: 40rpx;
  margin-top: 20rpx;
}
</style>
