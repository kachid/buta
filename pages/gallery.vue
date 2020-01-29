<template>
  <div
    class="d-flex flex-column flex-wrap align-content-center wrapper-box mx-auto"
  >
    <app-image-element v-for="(img, i) in images" :key="i" :src="img.src" />
  </div>
</template>

<script>
import AppImageElement from '@@/components/ImageElement'

export default {
  name: 'Gallery',
  components: {
    AppImageElement
  },
  data: () => ({
    images: [
      { src: '/images/hotel_pool_02.jpg' },
      { src: '/images/hotel_pool_03.jpg' },
      { src: '/images/hotel_pool_04.jpg' },
      { src: '/images/sunbeds.jpg' },
      { src: '/images/sunbeds_02.jpg' },
      { src: '/images/sunbeds_03.jpg' },
      { src: '/images/sunbeds_04.jpg' },
      { src: '/images/cafe.jpg' },
      { src: '/images/cafe_02.jpg' },
      { src: '/images/cafe_03.jpg' },
      { src: '/images/bicycles.jpg' },
      { src: '/images/bicycles_02.jpg' },
      { src: '/images/bicycles_03.jpg' }
    ]
  })
}
</script>
<style scoped>
.wrapper-box {
  height: 250vh;
}
</style>
