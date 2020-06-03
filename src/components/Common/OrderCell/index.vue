<template>
  <div class="cell-wrap" @click="$emit('on-info-click')">
    <div class="cell">
      <img
        class="icon"
        :src="item.icon"
        alt="图标"
        srcset="/"
      />

      <h3 class="title">{{item.title}}</h3>
    </div>

    <div class="cell">
      <span class="tag" v-if="item.text">{{item.text}}</span>

      <img
        class="icon"
        src="/static/imgs/icon_r.jpg"
        alt="图标"
        srcset="/"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style scoped>
.cell-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.cell {
  display: flex;
  align-items: center;
}

.icon {
  width: 50rpx;
  height: 50rpx;
}

.title {
  margin-left: 10px;
}

.tag {
  background-color: rgb(200, 250, 21);
  color: #fff;
  font-size: 14px;
  margin-right: 10px;
  border-radius: 15.2px;
  padding: 0 5px;
}
</style>
