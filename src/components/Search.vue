<template>
  <div class="search">
    <div class="container pagePosition">
      <div class="checkboxSection" id="checkboxes">
        <b-form-select v-model="selectedCity" required>
          <b-form-select-option hidden disabled value
            >Prosím vyberte</b-form-select-option
          >
          <b-form-select-option
            v-for="(c, index) in fireCities"
            :key="index"
            :value="c.url"
            >{{ c.name }}</b-form-select-option
          >
        </b-form-select>

        <b-dropdown right text="Historie">
          <b-dropdown-text>
            <label for="church">
              <input
                type="checkbox"
                id="church"
                value="church"
                v-model="filters"
              />
              Kostel
            </label>
          </b-dropdown-text>
          <b-dropdown-text>
            <label for="museum">
              <input
                type="checkbox"
                id="museum"
                value="museum"
                v-model="filters"
              />
              Muzeum
            </label>
          </b-dropdown-text>
        </b-dropdown>

        <b-dropdown right text="Relax">
          <b-dropdown-text>
            <label for="cinema">
              <input
                type="checkbox"
                id="cinema"
                value="cinema"
                v-model="filters"
              />
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
              <input
                type="checkbox"
                id="health"
                value="health"
                v-model="filters"
              />
              Pro zdraví
            </label>
          </b-dropdown-text>
        </b-dropdown>

        <b-dropdown right text="Rodinné aktivity">
          <b-dropdown-text>
            <label for="kids">
              <input type="checkbox" id="kids" value="kids" v-model="filters" />
              Pro děti
            </label>
          </b-dropdown-text>

          <b-dropdown-text>
            <label for="nature">
              <input
                type="checkbox"
                id="nature"
                value="nature"
                v-model="filters"
              />
              V přírodě
            </label>
          </b-dropdown-text>
        </b-dropdown>

        <b-dropdown right text="Sport">
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

      <div class="row searchResults">
        <div class="col-md" id="checkboxesOutput">
          <div v-if="places.length === 0">
            Prosim vyberte nekterou z kategorii.
          </div>
          <div
            v-for="place in places"
            :key="place.name"
            class="outputContainer"
          >
            <div class="outputCheckbox">
              <input
                type="checkbox"
                :id="place.name"
                :value="place.name"
                v-model="selection"
              />
            </div>
            <div class="wholeOutput">
              <label :for="place.name">
                <h2>{{ place.name }}</h2>
                <p>{{ place.outputAddress }}</p>
                <p>{{ place.outputDescription }}</p>
                <hr />
              </label>
            </div>
          </div>
        </div>

        <div class="col-md mapDisplay">
          <div class="links">
            <div class="row" v-if="mapPlaces.length >= 2">
              <div class="col-sm">
                <a
                  :href="generateGoogleMapLink('walking')"
                  target="_blank"
                  class="outputButton"
                  >Idem pešo!</a
                >
              </div>
              <div class="col-sm">
                <a
                  :href="generateGoogleMapLink('transit')"
                  target="_blank"
                  class="outputButton"
                  >Idem MHD!</a
                >
              </div>
              <div class="col-sm">
                <a
                  :href="generateGoogleMapLink('driving')"
                  target="_blank"
                  class="outputButton"
                  >Idem autom!</a
                >
              </div>
            </div>
          </div>
          <Map :places="mapPlaces" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../db";
import Map from "./Map.vue";
export default {
  name: "Search",

  props: {
    city: String,
    msg: String,
  },
  data() {
    return {
      filters: [],
      // cities: cities,
      selection: [],
      selectedCity: this.city || "",
      firePlaces: [],
      fireCities: [],
    };
  },
  firebase: {
    firePlaces: db.ref("places"),
    fireCities: db.ref("cities"),
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
        this.filters = this.filters.filter((item) => item !== filterName);
      } else {
        this.filters.push(filterName);
      }
    },
  },
  computed: {
    places() {
      return this.firePlaces
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
<style>
.search .dropdown .btn {
  background-color: #ec7568;
  border: 1px #ec7568 solid;
}
.search .show > .btn.dropdown-toggle {
  background-color: #ec7568;
  border: 1px #ec7568 solid;
}
</style>
<style scoped>
.searchResults {
  margin-top: 30px;
}
.custom-select {
  width: inherit;
}
.search .dropdown {
  margin: 3px 0;
}
.outputContainer {
  display: flex;
}
.wholeOutput {
  padding: 0 0 10px 10px;
}

.outputCheckbox {
  margin: 9px;
}
.checkboxSection {
  background-color: rgb(254, 250, 242);
}
.mx-1 {
  margin: 3px 0;
}

#checkboxes {
  text-align: center;
}
#checkboxesOutput {
  padding: 20px;
}

.b-dropdown-text {
  padding: 0;
}

.b-dropdown-text label {
  cursor: pointer;
  padding: 0.25rem 1.5rem;
  display: block;
  font-weight: 400;
}

.outputButton {
  text-decoration: none;
  background-color: #ec7568;
  color: white;
  padding: 5px;
  cursor: pointer;
  display: block;
  text-align: center;
  border: 1px #ec7568 solid;
  border-radius: 5px;
  margin-bottom: 10px;
}
.outputButton:hover {
  background-color: #6c757d;
  color: white;
}

hr {
  margin-right: 30px;
}
.wholeOutput p {
  padding-right: 15px;
}
.mapDisplay {
  min-height: 300px;
}

@media screen and (max-width: 810px) {
  #checkboxes {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (min-width: 811px) {
  .mapDisplay {
    background-color: rgb(254, 250, 242);
    /* overlay the left column */
    margin-top: 0px;
    margin-left: -30px;

    min-height: calc(100vh - 116px - 94px - 30px);
  }

  select:invalid {
    color: grey;
  }
  option {
    color: black;
  }

  #checkboxesOutput {
    width: calc(100vw - 400px);

    max-height: calc(100vh - 116px - 94px - 30px);
    overflow-y: scroll;
    overflow-x: hidden;
  }

  select {
    font-size: 16px;
  }

  .wholeOutput p,
  .wholeOutput h2 {
    padding-right: 45px;
  }
}
</style>
