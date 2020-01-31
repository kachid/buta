<template>
  <div
    class="d-flex flex-column flex-wrap align-content-center wrapper-box mx-auto"
  >
    <app-image-element v-for="(img, i) in images" :key="i" :src="img.src" />
  </div>
</template>

<script>
import { images } from '@@/data'
import AppImageElement from '@@/components/ImageElement'

export default {
  name: 'Gallery',
  components: {
    AppImageElement
  },
  data: () => ({
    images
  })
}
</script>
<style scoped>
.wrapper-box {
  height: 250vh;
}
</style>
