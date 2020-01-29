<template>
  <v-hover v-slot:default="{ hover }">
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
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-img :src="src" max-width="500" contain />
        </v-card>
      </v-dialog>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'ImageElement',
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
