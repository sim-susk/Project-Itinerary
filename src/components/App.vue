<template>
  <div class="container">
    <router-link to="/aboutUs">O nás</router-link>
    <router-link to="/home">Domů</router-link>
    <router-link to="/itinerary">Plánovač</router-link>
    <router-link to="/places">Přehled měst</router-link>


    <h1>Vue router</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}
</style>