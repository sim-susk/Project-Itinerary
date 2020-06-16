<template>
  <div class="city">
    {{ name }}
    {{ title }}
    {{ text }}
    {{ imgSrc }}
    {{ imgAlt }}

<!-- <img :src="city.imgSrc" alt="city.altSrc" />
      <div class="name">{{ city.name }}></div>
      <div class="title">{{ city.title }}></div>
      <div class="text">{{ city.text }}></div> -->

  </div>
</template>


<script>
export default {
  name: "City",
  props: ["name", "title", "text", "imgSrc", "imgAlt"]
}
</script>


<style lang="less" scoped>
// tady css pro city

</style>