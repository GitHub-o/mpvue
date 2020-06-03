<template>
  <div class="content">
    <ul class="list">
      <li
        class="item"
        :class="{cur: idx === _idx}"
        :key="_idx"
        v-for="(item, _idx) of list"
        @click="onItemClick(item, idx)"
      >
        <h3 class="title">{{item.name}}</h3>

        <img
          class="icon"
          v-if="item.lock"
          src="/static/imgs/lock.jpg"
          alt="icon"
          srcset="/"
        />

        <img
          class="icon"
          v-else
          src="/static/imgs/icon_r.jpg"
          alt="icon"
          srcset="/"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    idx: Number
  },

  methods: {
    onItemClick (item, idx) {
      if (this.idx !== idx) {
        this.$emit('update:idx', idx);
        item.lock = true;
      }
    }
  }
}
</script>

<style scoped>
.list {
  margin: 30rpx;
}

.item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-top: 30rpx;
  padding: 50rpx 30rpx;
  border-radius: 16rpx;
  border: 1rpx solid #ddd;
  box-shadow: 0 0 15rpx #ddd;
}

.item.cur:before {
  position: absolute;
  content: '';
  width: 2rpx;
  top: 10%;
  left: 0;
  height: 80%;
  background-color: #38f;
}

.title {
  color: #000;
}

.icon {
  width: 36rpx;
  height: 36rpx;
}
</style>
