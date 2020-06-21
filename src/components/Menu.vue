<template>
  <div class="menuButtons">
    <b-navbar toggleable="md">
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

          <b-nav-item-dropdown text="Přehled měst" right class="navbar-text">
            <b-dropdown-item to="/places/all">Zobraz vše</b-dropdown-item>
            <b-dropdown-item to="/places/region">Hledej podle krajů</b-dropdown-item>
            <b-dropdown-item to="/places/top5">Top 5</b-dropdown-item>
            <b-dropdown-item to="/places/travelWW">Cestujeme světově</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item to="/itinerary/">
            <b-nav-text>Plánovač</b-nav-text>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style>
.navbar {
  margin: 0;
  padding: 0;
  background-color: rgb(254, 246, 242);
}

.navbar-collapse.collapse {
  justify-content: center;
  padding: 0;
}

.navbar-text {
  font-weight: bold;
}

.img-menu {
  width: 120px;
  height: 100px;
}
</style>
