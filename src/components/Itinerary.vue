<template>
  <!-- <Search :city="$route.params.id" /> -->
  <Search :city="$route.params.id" />


  
</template>
<script>
import Search from "./Search";
export default {
  name: "Itinerary",
  components: {
    Search,
  },
};
</script>
