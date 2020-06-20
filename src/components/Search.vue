<template>
  <div class="search">
    <div class="pagePosition">
      <div class="checkboxSection" id="checkboxes">
        <!-- <div class="checkboxesAlign"> -->
        <select class="margin" v-model="selectedCity" required>
          <option hidden disabled value>Prosím vyberte</option>
          <option v-for="c in cities" :key="c.id" :value="c.url">{{ c.name }}</option>
        </select>

        <b-dropdown class="mx-1" right text="Historické památky">
          <b-dropdown-text>
            <label for="church">
              <input type="checkbox" id="church" value="church" v-model="filters" />
              Kostel
            </label>
          </b-dropdown-text>
          <b-dropdown-text>
            <label for="museum">
              <input type="checkbox" id="museum" value="museum" v-model="filters" />
              Muzeum
            </label>
          </b-dropdown-text>
        </b-dropdown>

        <b-dropdown class="mx-1" right text="Relax">
          <b-dropdown-text>
            <label for="cinema">
              <input type="checkbox" id="cinema" value="cinema" v-model="filters" />
              Kino
            </label>
          </b-dropdown-text>
          <b-dropdown-text>
            <label for="walk">
              <input type="checkbox" id="walk" value="walk" v-model="filters" />
              Procházka
            </label>
          </b-dropdown-text>
          <b-dropdown-text>
            <label for="health">
              <input type="checkbox" id="health" value="health" v-model="filters" />
              Pro zdraví
            </label>
          </b-dropdown-text>
        </b-dropdown>

        <b-dropdown class="mx-1" right text="Rodinné aktivity">
          <b-dropdown-text>
            <label for="kids">
              <input type="checkbox" id="kids" value="kids" v-model="filters" />
              Pro děti
            </label>
          </b-dropdown-text>

          <b-dropdown-text>
            <label for="nature">
              <input type="checkbox" id="nature" value="nature" v-model="filters" />
              V přírodě
            </label>
          </b-dropdown-text>
        </b-dropdown>

        <b-dropdown class="mx-1" right text="Sportovní aktivity">
          <b-dropdown-text>
            <label for="swim">
              <input type="checkbox" id="swim" value="swim" v-model="filters" />
              Koupání
            </label>
          </b-dropdown-text>

          <b-dropdown-text>
            <label for="ride">
              <input type="checkbox" id="ride" value="ride" v-model="filters" />
              Cyklistika
            </label>
          </b-dropdown-text>
        </b-dropdown>
      </div>
      <!-- </div> -->
      <div id="checkboxesOutput">
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
      filters: [],
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
    },
    toggleFilter(filterName) {
      if (this.filters.includes(filterName)) {
        this.filters = this.filters.filter(item => item !== filterName);
      } else {
        this.filters.push(filterName);
      }
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
.mapDisplay {
  display: inline-block;
}
/* .checkboxSection {
  display: flex;
  align-items: center;
} */
.checkboxSection {
  padding-bottom: 80px;
}
.mx-1 {
  margin: 1px;
}
.margin {
  margin: 5px;
}
#checkboxes,
#checkboxesOutput {
  width: 100vw;
}

.b-dropdown-text {
  padding: 0;
}

.b-dropdown-text label {
  cursor: pointer;
  padding: 0.25rem 1.5rem;
  display: block;
}
@media screen and (max-width: 790px) {
  #checkboxes {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (min-width: 791px) and (max-width: 1270px) {
  .checkboxSection {
    padding-bottom: 100px;
  }
}

@media screen and (min-width: 1271px) {
  .mapDisplay {
    position: fixed;
    right: 0;
    bottom: 0;
  }
  select:invalid {
    color: grey;
  }
  option {
    color: black;
  }

  #checkboxesOutput {
    width: calc(100vw - 400px);
    margin-top: -100px;
    max-height: calc(100vh - 116px - 120px);
    overflow-y: scroll;
  }
  .checkboxSection {
    width: calc(100vw - 400px);
    overflow-y: scroll;
    height: 220px;
    padding: 25px;
    display: flex;
    align-items: flex-start;
  }
  select {
    font-size: 20px;
  }
  #checkboxes {
    display: flex;
    flex-direction: row;
  }
}
</style>
