<template>
  <li class="item" @click="onNavToClick(item.url)">
    <div class="img-wrap">
      <img :src="item.img" alt="课程图片" srcset="/" />
    </div>

    <div class="info">
      <h3 class="title">{{item.title}}</h3>

      <div class="bottom">
        <span class="level">{{item.level}}</span>

        <span class="cell">
          <span class="watch">{{item.count}}</span>人学习过
        </span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },

  methods: {
    onNavToClick (url) {
      wx.navigateTo({ url: `/pages/detail/main?url=${ url }` });
    }
  }
}
</script>

<style scoped>
.item {
  padding: 30rpx;
  display: flex;
  border-bottom: 1rpx solid #ddd;
  height: 234rpx;
}

.img-wrap {
  width: 330rpx;
  height: 220rpx;
  border-radius: 12rpx;
  overflow: hidden;
}

.info {
  flex: 1;
  max-width: 49%;
  margin-left: 30rpx;
  padding: 10rpx 0;
}

.title {
  font-size: 36rpx;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60rpx;
  font-size: 30rpx;
}

.cell {
  color: #999;
}

.level {
  color: rgb(252, 190, 19);
}

.watch {
  color: rgb(174, 247, 6);
}
</style>
