<template>
  <div>
    <GmapMap
      :center="{ lat: 49, lng: 15 }"
      :zoom="6"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in places"
        :position="{ lat: m.latitude, lng: m.longitude }"
        :clickable="true"
      />
    </GmapMap>
  </div>
</template>
<script>
export default {
  name: "Map",
  props: {
    places: Array,
  },
};
</script>
