<template>
  <div>
    <b-navbar toggleable="md">
      <!-- type="light" variant="light" -->

      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <img class="img-menu" :src="`/assets/img/bg-img.png`" />

      <b-navbar-brand></b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/home">
            <b-nav-text>Domů</b-nav-text>
          </b-nav-item>
          <b-nav-item to="/aboutUs">
            <b-nav-text>O aplikaci</b-nav-text>
          </b-nav-item>
          <b-nav-item to="/places">
            <!-- <b-nav-text>Přehled měst</b-nav-text> -->

            <b-nav-item-dropdown text="Přehled měst" right class="navbar-text">
              <b-dropdown-item to="/places/kraj">Hledej podle krajů</b-dropdown-item>
              <b-dropdown-item to="/places/top5">Top 5</b-dropdown-item>
              <b-dropdown-item to="/places/travelWW">Cestujeme světově</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav-item>
          <b-nav-item to="/itinerary/">
            <b-nav-text>Plánovač</b-nav-text>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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

<style>
/* Nejmenší rozlišení */
.navbar {
  margin: 0;
  padding: 0;
  background-color: rgb(254, 246, 242);
}

.navbar-collapse.collapse {
  text-align: center;
  justify-content: center;
  padding: 0;
}

.navbar-text {
  /* nefunguje barva a styl pisma, zarovnani na sted*/
  color: rgb(132, 178, 135);
  font-weight: bold;
  display: flex !important;
  align-items: center;
  justify-content: center;

  background-color: rgb(215, 120, 111);
  border-radius: 18px;
  width: 130px;
  height: 60px;
}

.dropdown-menu {
  /* nefunguje */
  border-radius: 15px;
  background-color: coral;
}

.img-menu {
  width: 120px;
  height: 100px;
}

/* Tablet */
/* @media screen and (min-width: 541px) and (max-width:960px)  */

/* PC */
/* @media screen and (min-width: 961px) */
</style>
