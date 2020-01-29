<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="ma-5">
      <v-img :src="src" width="300" contain>
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            <v-btn icon tile outlined x-large color="white">
              <v-icon>mdi-magnify-plus-outline</v-icon>
            </v-btn>
          </div>
        </v-expand-transition>
      </v-img>
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
  }
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
