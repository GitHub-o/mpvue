<template>
  <div class="user-info">
    <div class="cell">
      <div class="img-wrap">
        <img :src="user.avatarUrl" alt="用户头像" srcset="/" />
      </div>

      <div class="info">
        <h3 class="nickname">{{user.nickName}}</h3>

        <div class="gender">{{user.gender ? '女' : '男'}}</div>
      </div>
    </div>

    <div class="cell">
      <ul class="list bottom">
        <li
          class="item"
          v-for="(item, idx) of list"
          :key="idx"
        >
          <span>{{item.title}}</span>

          <span class="count">{{item.count}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    list: Object
  }
}
</script>

<style scoped>
.user-info {
  background-color: #fff;
}

.cell {
  display: flex;
  align-items: center;
  padding: 30rpx;
  border-top: 1rpx solid #ddd;
}

.img-wrap {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
  overflow: hidden;
}

.info {
  margin-left: 50rpx;
}

.gender {
  color: #999;
  font-size: 32rpx;
}

.bottom {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.count {
  color: #999;
  margin-top: 20rpx;
}
</style>
