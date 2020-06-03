<template>
  <div class="options">
    <ul class="list">
      <li
        class="item"
        v-for="(item, _idx) of option"
        :key="_idx"
        @click="onItemClick(option, _idx)"
      >
        <img
          src="/static/images/selected.jpg"
          alt="是"
          srcset="/"
          class="icon"
          v-if="item.select"
        />

        <img
          src="/static/images/unselect.jpg"
          alt="是"
          srcset="/"
          class="icon"
          v-else
        />

        <span>{{item.label}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    option: Array,
    keyswords: Array
  },

  methods: {
    onItemClick (item, idx) {
      item.forEach(item =>
        item.select && (item.select = false)
      );

      item[idx].select = true;
      this.$emit('update:keywords', item[idx].label);
    },
  }
}
</script>

<style scoped>
.options {
  margin-top: 50rpx;
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
