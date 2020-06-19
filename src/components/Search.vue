<template>
  <div>
    <div>
      <select v-model="selectedCity">
        <option disabled value="">Prosím vyberte</option>
        <option v-for="c in cities" :key="c.id" :value="c.url">
          {{ c.name }}
        </option>
      </select>
      <input type="checkbox" id="church" value="church" v-model="filters" />
      <label for="church">church</label>
      <input type="checkbox" id="history" value="history" v-model="filters" />
      <label for="history">history</label>
      <input type="checkbox" id="party" value="party" v-model="filters" />
      <label for="party">party</label>
    </div>
    <div v-for="place in places" :key="place.name">
      <h2>
        <input
          type="checkbox"
          :id="place.name"
          :value="place.name"
          v-model="selection"
        />
        {{ place.name }}
      </h2>
      <p>{{ place.outputAddress }}</p>
      <p>{{ place.outputDescription }}</p>
    </div>

    <Map :places="mapPlaces" />
    <div v-if="mapPlaces.length >= 2">
      <a :href="generateGoogleMapLink('walking')">
        Idem pešo!
      </a>
      <a :href="generateGoogleMapLink('transit')">Idem MHD!</a>
      <a :href="generateGoogleMapLink('driving')">Idem autom!</a>
    </div>
  </div>
</template>
<script>
import { cities } from "../placesData.js";
import { places } from "../placesItinerary.js";
import Map from "./Map.vue";
export default {
  name: "Search",

  props: {
    city: String,
    msg: String,
  },
  data() {
    return {
      filters: ["church"],
      cities: cities,
      selection: [],
      selectedCity: this.city,
    };
  },

  methods: {
    generateGoogleMapLink(travel = "driving") {
      let places = this.mapPlaces;

      let urlOrigin =
        "https://www.google.com/maps/dir/?api=1&travelmode=" +
        travel +
        "&origin=" +
        encodeURIComponent(places[0].outputName);
      let waypoints = "";
      for (let i = 1; i <= places.length - 2; i++) {
        waypoints += encodeURIComponent(places[i].outputName) + "%7C";
      }

      let urlWaypoints = waypoints.length ? "&waypoints=" + waypoints : "";
      let urlDestination =
        "&destination=" +
        encodeURIComponent(places[places.length - 1].outputName);
      return urlOrigin + urlWaypoints + urlDestination;
    },
  },
  computed: {
    places() {
      return places
        .filter((place) => place.id == this.selectedCity)
        .filter((place) => {
          return place.tag.some((tag) => {
            return this.filters.includes(tag);
          });
        });
    },
    mapPlaces() {
      return this.places.filter((place) => this.selection.includes(place.name));
    },
  },
  components: { Map },
};
</script>
