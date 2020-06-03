<template>
  <div class="container"></div>
</template>

<script>
import * as API from '@/api'
import { asyncFunc } from '@/utils'
import { NETWORK_ERROR } from '@/config'

export default {
  onLoad () {
    this.getLessons();
  },

  methods: {
    async getLessons () {
      const [err, res] = await asyncFunc(API.getLessons);

      if (err) {
        wx.showToast({
          title: NETWORK_ERROR, //提示的内容,
          icon: 'fail', //图标,
          duration: 2000, //延迟时间,
          mask: true, //显示透明蒙层，防止触摸穿透,
        });
        return;
      }

      console.log(res);
    }
  }
}
</script>

<style scoped>
</style>
