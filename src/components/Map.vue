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
      <gmap-polyline v-if="path.length > 0" :path="path" ref="polyline">
      </gmap-polyline>
    </GmapMap>
  </div>
</template>
<script>
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
  },
};
</script>
