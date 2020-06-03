<template>
  <div class="container" v-if="res">
    <!-- 轮播 -->
    <TheSwiper :list="res.imgUrls" />

    <!-- 导航 -->
    <TheNav :idx.sync="idx" :nav="res.allLessons" />

    <!-- 内容 -->
    <TheContent :current.sync="idx" :list="res.allLessons" />
  </div>
</template>

<script>
import * as API from '@/api'
import { asyncFunc } from '@/utils'
import { TOAST } from '@/config'
import TheSwiper from '@/components/Common/TheSwiper'
import TheNav from '@/components/Lesson/Nav'
import TheContent from '@/components/Lesson/Content'

export default {
  onLoad () {
    this.getLessons();
  },

  components: {
    TheSwiper,
    TheNav,
    TheContent
  },

  data () {
    return {
      res: null,
      idx: 0
    }
  },

  methods: {
    async getLessons () {
      const [err, res] = await asyncFunc(API.getLessons);

      if (err) {
        wx.showToast({
          title: TOAST.NETWORK_ERROR, //提示的内容,
          icon: 'none', //图标,
          duration: 2000, //延迟时间,
          mask: true, //显示透明蒙层，防止触摸穿透,
        });
        return;
      }

      console.log(res);
      this.res = res;
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #f7f7f7;
}
</style>
