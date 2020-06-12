<template>
  <div class="container">
    <Menu />
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

html {
  font-family: sans-serif;
}
</style>