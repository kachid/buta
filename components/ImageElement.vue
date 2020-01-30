<template>
  <v-hover v-slot:default="{ hover }" open-delay="300">
    <v-card class="ma-5">
      <v-img :src="src" width="300" contain>
        <v-fade-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal"
            style="height: 100%;"
          />
        </v-fade-transition>
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex justify-center align-center transition-fast-in-fast-out"
            style="height: 100%;"
          >
            <v-btn
              icon
              tile
              outlined
              x-large
              color="white"
              @click.stop="dialog = true"
            >
              <v-icon>mdi-magnify-plus-outline</v-icon>
            </v-btn>
          </div>
        </v-expand-transition>
      </v-img>
      <app-image-element-dialog
        :src="src"
        :dialog="dialog"
        @close_dialog="dialog = false"
      />
    </v-card>
  </v-hover>
</template>

<script>
import AppImageElementDialog from '@@/components/ImageElementDialog'

export default {
  name: 'ImageElement',
  components: {
    AppImageElementDialog
  },
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    dialog: false
  })
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
