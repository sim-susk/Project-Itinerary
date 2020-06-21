<template>
  <div>
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: "App",
  components: {
    Menu: Menu
  }
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html,
body {
  font-family: "Montserrat", sans-serif !important;
  background-color: rgb(254, 250, 242) !important;
  color: #67696d !important;
}
</style>

