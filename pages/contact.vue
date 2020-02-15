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
