<template>
  <div class="order-info">
    <OrderCell
      v-for="(item, idx) of list"
      :key="idx"
      :item="item"
    />

    <OrderCell
      @on-info-click="onInfoClick"
      :item="{ icon: '/static/imgs/us.jpg', title: '关于我们' }"
    />
  </div>
</template>

<script>
import OrderCell from "@/components/Common/OrderCell";

export default {
  components: {
    OrderCell,
  },

  data () {
    return {
      list: [
        {
          icon: "/static/imgs/lev.jpg",
          title: "当前学习等级",
          text: '初级'
        },
        {
          icon: "/static/imgs/task.jpg",
          title: "当前学习任务",
          text: '未完成'
        },
      ],
    };
  },

  methods: {
    onInfoClick () {
      wx.navigateTo({ url: '/pages/about/main' });
    }
  }
};
</script>

<style scoped>
.order-info {
  margin-top: 30px;
}
</style>
