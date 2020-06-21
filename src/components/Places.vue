<template>
  <div class="places">
    
   
    <h5> {{pageData.myTitle }}</h5>
  
    <City
      v-for="(city, index) in pageData.myCities"
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
// import AboutUsVue from './AboutUs.vue';

export default {
  name: "Places",
  components: {
    City: City
  },
  computed: {
    placeType() {
      return this.$route.params.placeType
    },

  pageData() {
    let myTitle = "Zajímavé destinace v České Republice"
    let myCities = cities

    if (this.placeType === "top5") {
      myTitle = "Nejkrásnějších pět měst České Republiky"
      myCities = myCities.filter((city) => city.tags === "top5")
    } else if (this.placeType === "region") {
      myTitle = "To nejzajímavější v kraji"
      myCities = myCities.filter((city) => city.tags === "region")
    } else if (this.placeType === "travelWW") {
      myTitle = "Světové destinace v České Republice"
      myCities = myCities.filter((city) => city.tags === "travelWW")
    } 

    return {
      myTitle: myTitle,
      myCities: myCities,
    };
  }
  }
};
</script>

<style scoped>
.places h5 {
  background-color: grey;
  color: rgb(253, 250, 242);
  height: auto;
  width: calc(100vw - 25px);
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  margin: 15px;
}

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
