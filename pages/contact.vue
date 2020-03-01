<template>
  <div>
    <h1>Contact</h1>
    <GmapMap
      :center="{ lat: 41.6644282, lng: 41.6849846 }"
      :zoom="11"
      map-type-id="terrain"
      style="width: 100%; height: 400px"
    >
      <GmapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
    <v-row justify="start">
      <v-col cols="1">
        <div class="text-right">
          <v-icon>mdi-home</v-icon>
        </div>
      </v-col>
      <v-col>
        <span
          ><b>{{ $t('address1') }}</b></span
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="1">
        <span>{{ $t('address2') }}</span>
      </v-col>
    </v-row>
    <v-row justify="start">
      <v-col cols="1">
        <div class="text-right">
          <v-icon>mdi-phone</v-icon>
        </div>
      </v-col>
      <v-col>
        <a href="tel:+995558090979">
          <b>+995 (558) 09 09 79</b>
        </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="1">
        <span>{{ $t('hours') }}</span>
      </v-col>
    </v-row>
    <v-row justify="start">
      <v-col cols="1">
        <div class="text-right">
          <v-icon>mdi-email</v-icon>
        </div>
      </v-col>
      <v-col>
        <a
          href="mailto:medeya.boom.86@mail.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>medeya.boom.86@mail.ru</b>
        </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="1">
        <span>{{ $t('sendEmail') }}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
    markers: [
      {
        position: { lat: 41.6644282, lng: 41.6849846 }
      }
    ]
  })
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
