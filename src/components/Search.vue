<template>
  <div class="search">
    <div class="pagePosition">
      <div class="checkboxSection">
        <div>
          <select v-model="selectedCity" required>
            <option hidden disabled value>Prosím vyberte</option>
            <option v-for="c in cities" :key="c.id" :value="c.url">{{ c.name }}</option>
          </select>
          <p>Historické památky</p>
          <input type="checkbox" id="church" value="church" v-model="filters" />
          <label for="church">Kostel</label>
          <input type="checkbox" id="museum" value="museum" v-model="filters" />
          <label for="museum">Muzeum</label>

          <p>Relax</p>
          <input type="checkbox" id="cinema" value="cinema" v-model="filters" />
          <label for="cinema">Kino</label>
          <input type="checkbox" id="walk" value="walk" v-model="filters" />
          <label for="walk">Procházka</label>
          <input type="checkbox" id="health" value="health" v-model="filters" />
          <label for="health">Pro zdraví</label>

          <p>Rodinné aktivity</p>
          <input type="checkbox" id="kids" value="kids" v-model="filters" />
          <label for="kids">Pro děti</label>
          <input type="checkbox" id="nature" value="nature" v-model="filters" />
          <label for="nature">V přírodě</label>

          <p>Sportovní aktivity</p>
          <input type="checkbox" id="swim" value="swim" v-model="filters" />
          <label for="swim">Koupání</label>
          <input type="checkbox" id="ride" value="ride" v-model="filters" />
          <label for="ride">Cyklistika</label>
        </div>
        <div v-for="place in places" :key="place.name">
          <h2>
            <input type="checkbox" :id="place.name" :value="place.name" v-model="selection" />
            {{ place.name }}
          </h2>
          <p>{{ place.outputAddress }}</p>
          <p>{{ place.outputDescription }}</p>
        </div>
      </div>
      <div class="mapDisplay">
        <Map :places="mapPlaces" />
      </div>
    </div>
    <div class="links">
      <div v-if="mapPlaces.length >= 2">
        <a :href="generateGoogleMapLink('walking')">Idem pešo!</a>
        <a :href="generateGoogleMapLink('transit')">Idem MHD!</a>
        <a :href="generateGoogleMapLink('driving')">Idem autom!</a>
      </div>
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
    msg: String
  },
  data() {
    return {
      filters: ["church"],
      cities: cities,
      selection: [],
      selectedCity: this.city || ""
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
    }
  },
  computed: {
    places() {
      return places
        .filter(place => place.id == this.selectedCity)
        .filter(place => {
          return place.tag.some(tag => {
            return this.filters.includes(tag);
          });
        });
    },
    mapPlaces() {
      return this.places.filter(place => this.selection.includes(place.name));
    }
  },
  components: { Map }
};
</script>
<style scoped>
.pagePosition {
  display: flex;
  justify-content: space-between;
}
select:invalid {
  color: grey;
}
option {
  color: black;
}
</style>
