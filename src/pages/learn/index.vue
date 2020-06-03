<template>
  <div class="container">
    <scroll-view scroll-y>
      <LearnInfo />

      <ComCard
        title="我的课程"
        :lessons="recomLesson.mylessons"
      />

      <HotCard title="最新热门课程" :lessons="hotLesson" />
    </scroll-view>
  </div>
</template>

<script>
import LearnInfo from '@/components/Learn/Info'
import ComCard from '@/components/Learn/ComCard'
import HotCard from '@/components/Learn/HotCard'
import { mapState } from 'vuex'
import * as API from '@/api'
import { asyncFunc } from '@/utils'

export default {
  components: {
    LearnInfo,
    ComCard,
    HotCard
  },

  data () {
    return {
      hotLesson: []
    }
  },

  onLoad () {
    this.getHotLesson();
  },

  computed: {
    ...mapState('global', ['recomLesson'])
  },

  methods: {
    async getHotLesson () {
      const [err, res] = await asyncFunc(API.getHotLesson);

      if (err) {
        return;
      }

      this.hotLesson = res;
    }
  },

}
</script>

<style scoped>
.container {
  background-color: #f7f7f7;
}
</style>
