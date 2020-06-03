<template>
  <div class="container">
    <LessonList :lessons="recomLesson.mylessons" />
  </div>
</template>

<script>
import LessonList from '@/components/MyLesson/'
import { mapState } from 'vuex'

export default {
  components: {
    LessonList
  },

  computed: {
    ...mapState('global', ['recomLesson'])
  },
}
</script>

<style scoped>
.container {
  background-color: #f7f7f7;
}
</style>
