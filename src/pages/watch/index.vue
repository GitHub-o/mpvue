<template>
  <div class="container" v-if="detail">
    <video
      :src="detail.catalogue[idx].url"
      controls="true"
      autoplay="true"
      objectFit="contain"
      :poster="detail.img"
      class="video"
      @ended="onPlayEnd"
    ></video>

    <ContentList :idx.sync="idx" :list="detail.catalogue" />
  </div>
</template>

<script>
import * as API from '@/api'
import { asyncFunc } from '@/utils'
import ContentList from '@/components/Watch'

export default {
  onLoad () {
    this.getCatalogue();
  },

  components: {
    ContentList
  },

  data () {
    return {
      detail: null,
      idx: 0
    }
  },

  methods: {
    async getCatalogue () {
      const [err, res] = await asyncFunc(API.getCatalogue);

      if (err) {
        return;
      }

      wx.setNavigationBarTitle({ title: res.title });
      this.detail = res;
    },

    onPlayEnd () {
      const { detail, idx } = this;
      const { catalogue } = detail;

      if (idx < catalogue) {
        this.idx++;
        detail.catalogue[this.idx].lock = true;
      }
    }
  }
}
</script>

<style scoped>
.video {
  width: 100%;
}
</style>
