<template>
  <v-dialog
    :value="dialog"
    max-width="500"
    @click:outside="$emit('close_dialog')"
  >
    <v-hover v-slot:default="{ hover }">
      <v-card>
        <v-img :src="src" max-width="500" contain>
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
  </v-dialog>
</template>

<script>
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
  }
}
</script>
