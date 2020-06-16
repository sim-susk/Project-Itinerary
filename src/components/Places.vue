<template>
  <div class="places">

<City
    v-for="(city, index) in cities" :key="index"
    :name="cities.name"
    :title="cities.title"
    :text="cities.text"
    :img="cities.img"
    />
      
    
    
    
  </div>
</template>

<script>
import City from "./City"

import { cities } from "../placesData.js";

export default {
name: "Places",
components: {
  City : City
  },
data() {
  return {
    cities : cities
}
},

}
</script>

<style lang="less" scoped>

</style>
