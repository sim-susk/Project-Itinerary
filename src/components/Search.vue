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
      <button @click="getData">Vyhledat</button>
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
    getData() {
      console.log(this.city);
      console.log("clicked");
    },
    getUrl() {
      return (selectedCity = this.city);
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
