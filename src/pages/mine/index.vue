<template>
  <div class="container">
    <!-- 用户信息 -->
    <UserInfo :list="computeList" :user="user" />

    <!-- 信息 -->
    <OrderInfo :lesson="recomLesson" />
  </div>
</template>

<script>
import UserInfo from '@/components/Mine/UserInfo'
import OrderInfo from '@/components/Mine/OrderInfo'
import { mapState } from 'vuex'

export default {
  components: {
    UserInfo,
    OrderInfo
  },

  computed: {
    ...mapState('global', ['user', 'recomLesson']),

    computeList () {
      const { recomLesson } = this;
      if (!recomLesson) {
        return [];
      }

      const { totalCount, liveCount, finishCount } = recomLesson;

      return [
        {
          title: '课程',
          count: totalCount
        },
        {
          title: '完成',
          count: finishCount
        },
        {
          title: '直播',
          count: liveCount
        }
      ];
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #f7f7f7;
}
</style>
