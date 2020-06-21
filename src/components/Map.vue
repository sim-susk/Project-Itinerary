<template>
  <div>
    <GmapMap :center="{ lat: 49.90, lng: 15.25 }" :zoom="10" map-type-id="terrain">
      <GmapMarker
        :key="index"
        v-for="(m, index) in places"
        :position="{ lat: m.latitude, lng: m.longitude }"
        :clickable="true"
      />
      <gmap-polyline v-if="path.length > 0" :path="path" ref="polyline"></gmap-polyline>
    </GmapMap>
  </div>
</template>
<script>
export default {
  name: "Map",
  props: {
    places: Array
  },
  computed: {
    path() {
      return this.places.map(place => {
        return { lat: place.latitude, lng: place.longitude };
      });
    }
  }
};
</script>
<style>
.vue-map-container {
  width: 100vw;
  height: 300px;
}
@media screen and (min-width: 1310px) {
  .vue-map-container {
    width: 450px;
    height: calc(100vh - 116px);
  }
}
</style>
