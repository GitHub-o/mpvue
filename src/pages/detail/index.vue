<template>
  <web-view :src="url"></web-view>
</template>

<script>
export default {
  data () {
    return {
      url: ''
    }
  },

  onLoad ({ url }) {
    this.url = url;
  }
}
</script>
