<template>
  <div class="city" v-for="city in places">
<img :src="city.imgSrc" :alt="city.altSrc"/>
<div class="name"> {{ city.name }}></div>
<div class="title"> {{ city.title }}></div>
<div class="text"> {{ city.text }}></div>
  </div>
    
    
      
</template>

<script>
import { cities } from "../places.js";
export default {
  
}
</script>

<style lang="less" scoped>

//   * {
//   box-sizing: border-box;
// }

//  h1, h2, h3 {
//    text-align: center;
//    padding-top: 10px;
 
//  }
//  h2 {
//   font-style: italic;
  
//  }
 
//  .kontejner {
//    display: row;
//    margin: 10px;
//    width: 33%;
//  }
 
//  .places {
//    display: flex;
//    padding: 20px;
//    margin: 20px;
   
   
//  }

// p {
//  text-align: justify;
//    font-size: small;
// }

//  .mseno, .hejnice, .kanada {
//   border: solid 10px rosybrown;
// padding: 10px;
//  }
 </style>
