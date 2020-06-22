<template>
  <div class="places">
    <h5>{{ pageData.myTitle }}</h5>

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
import { db } from "../db";

export default {
  name: "Places",
  components: {
    City: City,
  },
  data() {
    return {
      fireCities: [],
    };
  },
  firebase: {
    fireCities: db.ref("cities"),
  },
  computed: {
    placeType() {
      return this.$route.params.placeType;
    },

    pageData() {
      let myTitle = "Zajímavé destinace v České Republice";
      let myCities = this.fireCities;

      if (this.placeType === "top5") {
        myTitle = "Nejkrásnějších pět měst České Republiky";
        myCities = myCities.filter((city) => city.tags === "top5");
      } else if (this.placeType === "recommend") {
        myTitle = "Doporučujeme";
        myCities = myCities.filter((city) => city.tags === "recommend");
      } else if (this.placeType === "travelWW") {
        myTitle = "Světové destinace v České Republice";
        myCities = myCities.filter((city) => city.tags === "travelWW");
      }

      return {
        myTitle: myTitle,
        myCities: myCities,
      };
    },
  },
};
</script>

<style scoped>
.places h5 {
  background-color: #031529;
  color: #fdfdfe;
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

@media screen and (min-width: 660px) and (max-width: 1044px) {
  .places {
    display: flex;
    flex-wrap: wrap;
  }
}

@media screen and (min-width: 1045px) {
  .places {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
