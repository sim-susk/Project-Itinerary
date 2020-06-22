<template>
  <div class="menuButtons">
    <b-navbar toggleable="md">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <router-link to="/">
        <img class="img-menu" :src="`/assets/img/bg-img.png`" />
      </router-link>
      <b-navbar-brand></b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">
            <b-nav-text>Domů</b-nav-text>
          </b-nav-item>
          <b-nav-item to="/aboutUs">
            <b-nav-text>O aplikaci</b-nav-text>
          </b-nav-item>

          <b-nav-item-dropdown text="Přehled měst" right class="navbar-text">
            <b-dropdown-item to="/places/all">Zobraz vše</b-dropdown-item>
            <b-dropdown-item to="/places/recommend"
              >Doporučujeme</b-dropdown-item
            >
            <b-dropdown-item to="/places/top5">Top 5</b-dropdown-item>
            <b-dropdown-item to="/places/travelWW"
              >Cestujeme světově</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item to="/itinerary/">
            <b-nav-text>Plánovač</b-nav-text>
          </b-nav-item>
          <b-nav-item to="/add-place/" id="noBorder">
            <b-nav-text>Přidat místo</b-nav-text>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style>
.navbar {
  margin: 0;
  padding: 0;
  background-color: rgb(253, 250, 242);
}

.navbar-collapse.collapse {
  justify-content: center;
  padding: 0;
}

li.navbar-text {
  font-weight: bold;
  color: #67696d !important;
}
.navbar-light .navbar-nav .nav-link {
  color: #67696d !important;
}
.img-menu {
  width: 120px;
  height: 100px;
}

.menuButtons {
  font-size: 16px;
}

.nav-item:hover li,
.nav-item:hover span {
  color: #999b9f !important;
}

/* .dropdown-item:hover li{
  color: #999b9f !important;
} */

.nav-item {
  padding: 0 5px;
  border-right: 1px #67696d solid;
  border-radius: 1px;
}
#noBorder {
  border: none;
}
</style>
