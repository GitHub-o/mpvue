<template>
  <div class="card-info">
    <div class="img-wrap">
      <img
        class="img"
        src="/static/imgs/plan.jpg"
        alt="计划"
        srcset="/"
      />
    </div>

    <div class="desc">
      <h2 class="title">
        已学习
        <span>0</span>分钟
      </h2>

      <p class="tip">
        今日目标已完成
        <span class="percentage">0</span>%
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card-info {
  display: flex;
  padding: 30rpx;
  background-color: #fff;
  border: 1rpx solid #ddd;
}

.img-wrap {
  width: 200rpx;
  height: 200rpx;
}

.desc {
  flex: 1;
  margin-left: 30rpx;
}

.title {
  font-size: 40rpx;
  margin: 30rpx 0;
  font-weight: bold;
}

.tip {
  color: #999;
  font-size: 30rpx;
}
</style>
