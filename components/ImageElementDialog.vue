<template>
  <v-dialog
    :value="dialog"
    max-width="500"
    @click:outside="$emit('close_dialog')"
  >
    <v-carousel
      v-model="currentIndex"
      hide-delimiters
      hide-delimiter-background
      show-arrows-on-hover
      height="650"
    >
      <v-carousel-item v-for="(image, i) in images" :key="i">
        <v-hover v-slot:default="{ hover }">
          <v-card>
            <v-img :src="image.src" max-width="500" contain>
              <div>&nbsp;</div>
              <v-expand-transition>
                <div v-if="hover" class="gray lighten-5 text-center">
                  {{ i + 1 }} of {{ images.length }}
                </div>
              </v-expand-transition>
              <v-fab-transition>
                <v-btn
                  v-if="hover"
                  color="white"
                  dark
                  absolute
                  top
                  right
                  fab
                  icon
                  outlined
                  class="mt-10"
                  @click="$emit('close_dialog')"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-fab-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
import { images } from '@@/data'

export default {
  name: 'ImageElementDialog',
  props: {
    src: {
      type: String,
      default: ''
    },
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    images,
    currentIndex: 0
  }),
  computed: {
    currentImageHeight() {
      return this.getImageHeight(this.images[this.currentIndex].src)
    }
  },
  mounted() {
    this.currentIndex = this.images.findIndex((item) => item.src === this.src)
  },
  methods: {
    getImageHeight(src) {
      const img = new Image()
      img.src = src
      return img.height
    }
  }
}
</script>
