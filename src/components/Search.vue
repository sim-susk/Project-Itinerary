<template>
  <div>
    {{city}}
    <input type="checkbox" id="church" value="church" v-model="selection" />
    <label for="church">church</label>
    <input type="checkbox" id="history" value="history" v-model="selection" />
    <label for="history">history</label>
    <input type="checkbox" id="party" value="party" v-model="selection" />
    <label for="party">party</label>
    <button @click="getData">Vyhledat</button>
    <div v-for="place in places" :key="place.name">
      <h2>
        <input type="checkbox" id="selected" />
        {{ place.name }}
      </h2>
      <p>{{place.outputAddress}}</p>
      <p>{{place.outputDescription}}</p>
    </div>
  </div>
</template>
<script>
import { places } from "../placesItinerary.js";

export default {
  name: "Search",

  props: {
    city: String,
    msg: String
  },
  data: () => ({ selection: ["church"] }),
  methods: {
    getData() {
      console.log("clicked");
    }
  },
  computed: {
    places() {
      return places
        .filter(place => place.city == this.city)
        .filter(place => {
          return place.tag.some(tag => {
            return this.selection.includes(tag);
          });
        });
    }
  }
};
</script>