<template>
  <GmapMap :center="{ lat: 49.9, lng: 15.25 }" :zoom="10" map-type-id="terrain">
    <GmapMarker
      :key="index"
      v-for="(m, index) in places"
      :position="{ lat: m.latitude, lng: m.longitude }"
      :clickable="true"
      :animation="google && google.maps.Animation.DROP"
    />
    <gmap-polyline
      v-if="path.length > 0"
      :path="path"
      ref="polyline"
    ></gmap-polyline>
  </GmapMap>
</template>
<script>
import { gmapApi } from "gmap-vue";
export default {
  name: "Map",
  props: {
    places: Array,
  },
  computed: {
    path() {
      return this.places.map((place) => {
        return { lat: place.latitude, lng: place.longitude };
      });
    },
    google: gmapApi,
  },
};
</script>
<style scoped>
.vue-map-container {
  width: 100%;
  height: 100%;
}
</style>
