<template>
  <div class="container">
    <p class="formIntro">
      Pokud by jste se chtěli podělit o zajímavé místo, které stojí za to
      navštívit a na naší stránce by nemělo chybět, prosíme vyplňte následující
      formulář:
    </p>
    <div class="row">
      <div class="col-md-7 ">
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group label="Město:" label-for="formCity">
            <b-form-select id="formCity" v-model="form.id" required>
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
          </b-form-group>
          <b-form-group label="Název:" label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              required
              placeholder="Zadajte, prosím název"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Popis města:" label-for="formDescription">
            <b-form-input
              id="formDescription"
              v-model="form.outputDescription"
              required
              placeholder="Zadajte krátký popis"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Adresa:" label-for="outputAddress">
            <b-form-input
              id="outputAddress"
              v-model="form.outputAddress"
              required
              placeholder="Zadajte potáhnutím značky na mape"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Zeměpisná šířka:" label-for="latitude">
            <b-form-input
              id="latitude"
              v-model="form.latitude"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Zeměpisná délka:" label-for="longitude">
            <b-form-input
              id="longitude"
              v-model="form.longitude"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Tag:" label-for="tags">
            <b-form-select
              id="tags"
              v-model="form.tag"
              required
              multiple
              :select-size="9"
            >
              <b-form-select-option hidden disabled value
                >Prosím vyberte</b-form-select-option
              >
              <b-form-select-option
                v-for="(c, index) in tags"
                :key="index"
                :value="c.id"
                >{{ c.value }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
          <div class="buttonContainer">
            <b-button type="submit" variant="primary" id="submitButtom"
              >Odeslat</b-button
            >
          </div>
        </b-form>
      </div>
      <div class="col-md-5 map">
        <GmapMap
          :center="{ lat: 49.9, lng: 15.25 }"
          :zoom="10"
          map-type-id="terrain"
        >
          <GmapMarker
            :index="1"
            :position="marker.position"
            :draggable="true"
            :animation="google && google.maps.Animation.DROP"
            @dragend="onDrag"
          />
        </GmapMap>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../db";
import { gmapApi } from "gmap-vue";
export default {
  data() {
    return {
      marker: {
        position: { lat: 49.9, lng: 15.25 },
      },
      form: {
        id: "",
        city: "",
        name: "",
        outputDescription: "",
        outputAddress: "",
        latitude: "",
        longitude: "",
        tag: [],
      },
      fireCities: [],
      tags: [
        { id: "church", value: "Kostel" },
        { id: "museum", value: "Muzeum" },
        { id: "cinema", value: "Kino" },
        { id: "walk", value: "Procházka" },
        { id: "health", value: "Pro zdraví" },
        { id: "kids", value: "Pro děti" },
        { id: "nature", value: "V přírodě" },
        { id: "swim", value: "Koupání" },
        { id: "ride", value: "Cyklistika" },
      ],
      show: true,
    };
  },
  firebase: {
    fireCities: db.ref("cities"),
  },
  methods: {
    onDrag(event) {
      let latLng = event.latLng;
      let geocoder = new this.google.maps.Geocoder();

      // required as vue re-renders the map on update
      this.marker.position = latLng;

      geocoder.geocode({ location: latLng }, (results, status) => {
        this.form.outputAddress = results[0].formatted_address;
      });
      this.form.latitude = latLng.lat();
      this.form.longitude = latLng.lng();
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      db.ref("places").push(this.form);
    },
  },
  computed: {
    google: gmapApi,
  },
};
</script>
<style scoped>
.vue-map-container {
  width: 100%;
  height: 100%;
}

#submitButtom {
  background-color: #ec7568;
  border: none;
}
#submitButtom:hover {
  background-color: #4b4b48;
  border-color: #4b4b48;
}

.buttonContainer {
  text-align: center;
}
.formIntro {
  text-align: center;
  font-weight: bold;
  padding: 20px 0;
}

.row {
  padding-bottom: 10px;
}
@media screen and (max-width: 768px) {
  .map {
    height: 300px;
    margin: 25px 0;
  }
}
</style>
