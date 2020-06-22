<template>
  <div>
    <div class="map">
      <GmapMap
        :center="{ lat: 49.9, lng: 15.25 }"
        :zoom="10"
        map-type-id="terrain"
      >
        <GmapMarker
          :index="1"
          :position="{ lat: 49.9, lng: 15.25 }"
          :draggable="true"
          @dragend="onDrag"
        />
      </GmapMap>
    </div>
    <div>
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group label="Mesto:" label-for="formCity">
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
        <b-form-group label="Nazov:" label-for="name">
          <b-form-input id="name" v-model="form.name" required></b-form-input>
        </b-form-group>

        <b-form-group label="Popis miesta:" label-for="formDescription">
          <b-form-input
            id="formDescription"
            v-model="form.outputDescription"
            required
            placeholder="Prosim, zadajte kratky popis"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Adresa:" label-for="outputAddress">
          <b-form-input
            id="outputAddress"
            v-model="form.outputAddress"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Zemepisna sirka:" label-for="latitude">
          <b-form-input
            id="latitude"
            v-model="form.latitude"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Zemepisna dlzka:" label-for="longitude">
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

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
import { db } from "../db";
import { gmapApi } from "gmap-vue";
export default {
  data() {
    return {
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

      fetch(
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
          latLng.lat() +
          "," +
          latLng.lng() +
          "&key=AIzaSyCu6wdPTON4O0qKgp6Hs7dspsAvmjTMTqc"
      )
        .then((r) => r.json())
        .then((r) => {
          this.form.latitude = latLng.lat();
          this.form.longitude = latLng.lng();
          this.form.outputAddress = r.results[0].formatted_address;
        });
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
