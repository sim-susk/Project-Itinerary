<template>
  <div>
    {{city}}
    <input type="checkbox" id="church" value="church" v-model="selection" />
    <label for="church">church</label>
    <input type="checkbox" id="history" value="history" v-model="selection" />
    <label for="history">history</label>
    <input type="checkbox" id="party" value="party" v-model="selection" />
    <label for="party">party</label>
    {{ places.map(u => u.name) }}
    <button @click="getData">Vyhledat</button>
  </div>
</template>
<script>
import { kutnaHora } from "../kutnaHora.js";

export default {
  name: "Search",

  props: {
    city: String,
    msg: String
  },
  data: () => ({ selection: [] }),
  methods: {
    getData() {
      console.log("clicked");
    }
  },
  computed: {
    places() {
      return kutnaHora
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