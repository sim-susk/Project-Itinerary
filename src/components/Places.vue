<template>
  <div class="places">
    <City
      v-for="(city, index) in cities"
      :key="index"
      :id="city.id"
      :url="city.url"
      :name="city.name"
      :title="city.title"
      :text="city.text"
      :imgSrc="city.imgSrc"
      :altSrc="city.altSrc"
    />
  </div>
</template>

<script>
import City from "./City";

import { cities } from "../placesData.js";

export default {
  name: "Places",
  components: {
    City: City
  },
  data() {
    return {
      cities: cities
    };
  }
};
</script>

<style scoped>
.places {
  display: block;
  background-color: rgb(254, 250, 242);
}

@media screen and (min-width: 541px) and (max-width: 960px) {
  .places {
    display: flex;
    flex-wrap: wrap;
  }
}

@media screen and (min-width: 961px) {
  .places {
    /* display: flex; */
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    /* margin: 20px; barva */
  }
}
</style>
