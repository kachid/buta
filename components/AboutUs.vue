<template>
  <v-row justify="center">
    <v-col cols="12" md="9" lg="6">
      <v-card flat>
        <v-card-title class="justify-center display-3">
          <span>{{ about.aboutUs }}&ensp;</span>
          <span>{{ about.ourHistory }}</span>
        </v-card-title>
        <v-card-subtitle class="subtitle-1 mt-8">
          {{ about.subtitle }}
        </v-card-subtitle>
        <v-card-text>
          <p>{{ about.p1 }}</p>
          <p>{{ about.p2 }}</p>
          <p>{{ about.p3 }}</p>
          <p>{{ about.p4 }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AboutUs',
  computed: {
    about() {
      return this.$t('about')
    }
  }
}
</script>
