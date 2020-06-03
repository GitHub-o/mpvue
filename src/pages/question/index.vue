<template>
  <div class="container">
    <img
      src="/static/imgs/test.jpg"
      alt="背景图片"
      class="img-bg"
      srcset="/"
    />

    <div class="content">
      <p v-if="!isStart" class="tip">为了更好的学习请回答一下问题！！！</p>

      <div v-else class="question-wrap">
        <h3 class="title">{{questions[idx].title}}</h3>

        <Options
          :keywords.sync="keywords"
          :option="questions[idx].option"
        />
      </div>
    </div>

    <button
      class="default-btn"
      @click="onBtnClick"
      :disabled="computeDisabled"
    >{{btnTitle}}</button>
  </div>
</template>

<script>
import * as API from '@/api'
import Options from '@/components/Common/Options'
import { mapActions } from 'vuex'

export default {
  onLoad () {
    this.getQuestions();
  },

  components: {
    Options
  },

  data () {
    return {
      btnTitle: '开始答题',
      isStart: false,
      questions: [],
      idx: 0,
      lesson: [],
      keywords: ''
    }
  },

  computed: {
    computeDisabled () {
      if (!this.isStart) {
        return false;
      }

      const { questions, idx } = this;

      const arr = questions[idx].option;

      return !(arr.some(item => item.select));
    }
  },

  methods: {
    ...mapActions('global', ['SetRecomLesson']),

    async getQuestions () {
      const { questions } = await API.getQuestions();

      this.questions = questions;
    },

    onBtnClick () {
      if (!this.isStart) {
        this.isStart = true;
        this.btnTitle = '下一题';
        return;
      }

      const { questions, lesson, keywords } = this;

      lesson.push(keywords);

      if (this.idx === questions.length - 1) {
        const data = {
          userId: '3.1415926',
          lesson: lesson.toString()
        }

        this.getMyRecomLesson(data);
        wx.switchTab({ url: '/pages/learn/main' });
        return;
      }

      if (this.idx === questions.length - 2) {
        this.btnTitle = '完成';
      }

      this.idx++;
    },

    async getMyRecomLesson (data) {
      const res = await API.getMyRecomLesson(data);

      SetRecomLesson(res);
    }
  }
}
</script>

<style scoped>
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
  width: 80%;
  min-height: 300rpx;
  padding: 30rpx;
  background-color: #fff;
  border-radius: 20rpx;
}

.title {
  font-weight: bold;
  line-height: 50rpx;
  font-size: 40rpx;
}

.item {
  margin: 20rpx 0;
}

.icon {
  width: 30rpx;
  height: 30rpx;
  margin-right: 10rpx;
}
</style>
