<template>
  <div class="container">
    <img
      src="/static/imgs/guide_bg.jpg"
      class="img-bg"
      lazy-load="false"
    />

    <button
      open-type="getUserInfo"
      @getuserinfo="getUserInfo"
      lang="zh_CN"
      class="default-btn"
    >开启学习之旅</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import * as API from '@/api'
import { asyncFunc } from '@/utils'
import { NETWORDK_ERROR } from '@/config'

export default {
  computed: {
    ...mapState('global', ['user'])
  },

  methods: {
    ...mapActions('global', ['SetUser', 'SetRecomLesson']),

    getUserInfo ({ mp: { detail: { userInfo } } }) {
      userInfo && this.SetUser(userInfo);
      wx.login({
        success: ({ code }) =>
          this.getOpenid(code),
      });
    },

    async getOpenid (code) {
      const [err, res] = await asyncFunc(
        () => API.getOpenid(code)
      );

      if (err) {
        wx.showToast({
          title: 'NETWORDK_ERROR', //提示的内容,
          icon: 'fail', //图标,
          duration: 2000, //延迟时间,
          mask: true
        });
        return;
      }

      const [err1, res1] = await asyncFunc(
        () => API.getMyLesson('3.1415926')
      );

      if (err1) {
        wx.showToast({
          title: 'NETWORDK_ERROR', //提示的内容,
          icon: 'fail', //图标,
          duration: 2000, //延迟时间,
          mask: true
        });
        return;
      }

      if (res1.totalCount > 0) {
        this.SetRecomLesson(res1);
        console.log('getOpenid -> res1', res1)
        wx.switchTab({ url: '/pages/learn/main' });
        return;
      }

      wx.redirectTo({ url: '/pages/question/main' });

    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
