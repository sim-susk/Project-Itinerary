<template>
  <div>
    <b-navbar toggleable="sm">
     <!-- type="light" variant="light" -->
    
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <img class="img-menu" :src="`./assets/img/bg-img.png`" />

      <b-navbar-brand></b-navbar-brand>

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
.navbar {
  margin: 0;
  padding: 0;
  
}

.navbar {
background-color: rgb(254, 250, 242);

}

.navbar.navbar-light.navbar-expand-sm {
 
}
 

#nav-text-collapse.navbar-collapse.collapse {
text-align: center;
 justify-content: center;
  text-decoration: underline;
  padding: 0;
}

.navbar-text {
  text-decoration: underline;
  /* nefunguje barva a styl*/
  color: rgb(0 115 105);
  font-style: bold;

}

.img-menu {
  width: 120px;
  height: 100px;

  
}

</style>