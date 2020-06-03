<template>
  <li class="item">
    <div class="img-wrap">
      <img :src="item.img" alt="课程图片" srcset="/" />
    </div>

    <p class="title">{{item.title}}</p>
  </li>
</template>

<script>

export default {
  props: {
    item: Object
  }
}
</script>

<style scoped>
.item {
  display: inline-block;
  width: 230rpx;
  margin-right: 20rpx;
}

.img-wrap {
  width: 230rpx;
  height: 230rpx;
}

.title {
  color: #666;
  font-size: 30rpx;
  margin-top: 10rpx;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
