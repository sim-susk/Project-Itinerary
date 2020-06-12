<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>BootstrapVue</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/home">
            <b-nav-text>Domů</b-nav-text>
          </b-nav-item>
          <b-nav-item to="/aboutUs">
            <b-nav-text>O nás</b-nav-text>
          </b-nav-item>
          <b-nav-item to="/itinerary">
            <b-nav-text>Plánovač</b-nav-text>
          </b-nav-item>
          <b-nav-item to="/places">
            <b-nav-text>Přehled měst</b-nav-text>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
  <!-- <router-link to="/aboutUs">O nás</router-link>
    <router-link to="/home">Domů</router-link>
    <router-link to="/itinerary">Plánovač</router-link>
    <router-link to="/places">Přehled měst</router-link>

    <h1>Vue router</h1>
  -->
</template>

<script>
export default {
  name: "Menu"
};
</script>


