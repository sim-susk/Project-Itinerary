<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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

      <!-- <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { db } from "../db";
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
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      db.ref("places").push(this.form);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
