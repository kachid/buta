<template>
  <v-row justify="center">
    <v-col cols="12" md="9" lg="9">
      <v-card class="d-flex flex-wrap my-12">
        <v-img :src="img" max-width="500" contain />
        <div>
          <v-card-title
            :class="[$vuetify.breakpoint.smAndDown ? 'title' : 'headline']"
          >
            <slot name="title" />
          </v-card-title>
          <v-card-subtitle>
            <slot name="sleeps" />
          </v-card-subtitle>
          <v-card-text>
            <slot name="description" />
          </v-card-text>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'RoomDescription',
  props: {
    img: {
      type: String,
      default: ''
    }
  }
}
</script>
