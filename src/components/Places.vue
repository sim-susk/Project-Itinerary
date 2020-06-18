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
    City: City,
  },
  data() {
    return {
      cities: cities,
    };
  },
};
</script>

<style lang="less" scoped></style>
