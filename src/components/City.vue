<template>
  <div class="city">
    <h1 class="name" {{ name }}></h1>
    <h2 class="title" {{ title }}></h2>
    <p class="text" {{ text }}></p>

    <img class="img" :src="`./assets/img-places/${imgSrc}`" />
    


  </div>
</template>


<script>
export default {
  name: "City",
  props: ["name", "title", "text", "imgSrc", "altSrc"]
}
</script>


<style>

.city {
  height: 90px;
  width: 100px;
  border: 3px solid brown;
  background-color: green;
  margin: 10px;
}
</style>