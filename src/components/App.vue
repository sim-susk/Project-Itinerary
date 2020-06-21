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
  font-family: sans-serif;
  background-color: rgb(254, 250, 242) !important;
}
</style>

