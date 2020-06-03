<template>
  <div class="title">
    <h3>
      {{title}}
      <span class="total">({{total}})</span>
    </h3>

    <em class="more" @click="$emit('on-more-click')">
      查看更多
      <img
        src="/static/imgs/icon_r.jpg"
        alt="more"
        srcset="/"
        class="icon"
      />
    </em>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    total: Number
  }
}
</script>

<style scoped>
.title {
  padding: 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h3 {
  font-size: 40rpx;
  font-weight: bold;
}

.total {
  color: #999;
}

.more {
  color: #999;
  font-size: 30rpx;
}

.icon {
  width: 30rpx;
  height: 30rpx;
  vertical-align: middle;
}
</style>
