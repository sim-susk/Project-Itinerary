<template>
<div class="city">

  <div class="item"> 
      <div class="text">{{ text }}</div>  
      <img class="img" :src="`/assets/img-places/${imgSrc}`" />
      <h1 class="name">{{ name }}</h1>
      <h2 class="title">{{ title }}</h2>
    </div>

</div>
</template>


<script>
export default {
  name: "City",
  props: ["name", "title", "text", "imgSrc", "altSrc"]
}
</script>


<style>
/* Nejmenší rozlišení */
html {
  background-color: rgb(254, 250, 242);
}

.item {
  position: relative;
  height: 400px;

}

.title, .name {
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  color: white;
  z-index: 1;
  border-radius: 20px 20px 0 0;
}

.title {
  margin-top: 60px;
  font-size: 1em;
  font-style: italic;
}

.name {
  font-size: 2em;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 10px;
}

.text {
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgb(181, 179, 179);
  display: none;
  font-size: 1em;
  line-height: 1.5;
  text-align: justify;
  padding: 30px;
  border-radius: 20px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.item:hover .text {
  display: block;
}

* {
    box-sizing: border-box;
    
  }

.city {
  display: block;
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  
}

 .places {
   
   display: block;;
   background-color: rgb(254, 250, 242);
 }
/* Tablet */
 @media screen and (min-width: 541px) and (max-width:960px) {
   .city {
     /* pri vsech rozlisenich stejny???? */
     /* font-size: 3em; */
  align-items: center;
  
  width: calc(50% - 20px);
  
  padding: 10px;
  margin: 10px;
   }
 
.places {
  display: flex;
  flex-wrap: wrap;
}
 }



/* PC */
@media screen and (min-width: 961px) {
  
}



</style>