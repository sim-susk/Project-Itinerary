<template>
  <div class="city">
    <h1 class="name">{{ name }}</h1>
    <h2 class="title">{{ title }}</h2>
    <p class="text">{{ text }}</p>

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
   text-align: center;
   background-color: rgb(254, 250, 242);
   border-radius: 40px;
}
.name, .title, .text {
  text-align: center;
  margin-top: 10px;
  padding: 10px;
}

.img {
  max-height: 350px;
  padding-bottom: 20px;
  
}

* {
  box-sizing: border-box;
}

 
 h2 {
  font-style: italic;
  
 }
 
 .kontejner {
   display: row;
   margin: 10px;
   width: 33%;
 }
 
 .places {
   /* display: flex; */
   padding: 20px;
   margin: 20px;
   
   
 }



</style>