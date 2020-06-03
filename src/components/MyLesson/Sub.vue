<template>
  <li class="item" @click="onNavToClick(item.lock)">
    <div class="img-wrap">
      <img :src="item.img" alt="图片" srcset="/" />
    </div>

    <div class="info">
      <h3 class="title">{{item.title}}</h3>

      <progress
        :percent="item.progress"
        stroke-width="6"
        color="#09BB07"
        active="true"
      ></progress>

      <div class="tip">
        <template v-if="item.lock">
          <span>完成上个课程自动解锁</span>

          <img
            src="/static/imgs/lock.jpg"
            alt="图片"
            srcset="/"
            class="icon"
          />
        </template>

        <em v-else>
          已完成
          <span>{{item.progress}}</span>%
        </em>
      </div>
    </div>
  </li>
</template>

<script>
import { LESSON_LOCK } from '@/config'

export default {
  props: {
    item: Object
  },

  methods: {
    onNavToClick (lock) {
      if (lock) {
        wx.showToast({
          title: LESSON_LOCK, //提示的内容,
          icon: 'failed', //图标,
          duration: 2000, //延迟时间,
          mask: true
        });
        return;
      }

      wx.navigateTo({ url: '/pages/watch/main' });
    }
  }
}
</script>

<style scoped>
.my-lesson {
  margin: 40rpx;
  margin-top: 20rpx;
}

.item {
  display: flex;
  border-radius: 15rpx;
  margin-top: 40rpx;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
}

.img-wrap {
  width: 250rpx;
  height: 250rpx;
}

.info {
  flex: 1;
  padding: 30rpx;
}

.title {
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 30rpx;
}

.tip {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30rpx;
  color: #999;
  margin-top: 20rpx;
}

.icon {
  width: 36rpx;
  height: 36rpx;
}
</style>
