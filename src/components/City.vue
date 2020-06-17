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

/* Nejmenší rozlišení */

  * {
    box-sizing: border-box;
  }

.city {
  display: block;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
  border: solid 3px rgb(64, 63, 62);
}
.name, .title, .text {
  text-align: center;
  padding: 0 10px 0 10px;
  display: block;
  text-decoration-color: rgb(0, 115, 105);
}

.img {
  max-height: 350px;
  max-width: 250px;
  padding-bottom: 20px;
  overflow: auto;
  background-color:transparent;
}

h1.name {
  font-size: 2em;
  font-style: bold;
}

 h2.title {
  font-size: 1em;
  font-style: italic;
  
 }

 p.text {
   font-size: 0.65em;
   line-height: 1.3;
   text-align: justify;
   /* background-image: src(/image().png); */
 }

 .places {
   padding: 10px;
   margin: 10px;
   display: block;;
   
 }
/* Tablet */
 @media screen and (min-width: 541px) and (max-width:960px) {
   .city {
     /* pri vsech rozlisenich stejny???? */
     /* font-size: 3em; */
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
   }
 
.places {
  display: flex;
  width: auto;
  flex-grow: 2;
  
}
 }



/* PC */
@media screen and (min-width: 961px) {
  .city {

  }
}



</style>