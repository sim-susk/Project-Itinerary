<template>
  <div class="aboutUs">
    <p> Tato stránka vám v jednoduchých krocích pomůže naplánovat trasu a vytvořit vlastní itinerář cesty do vybraného místa v České Reublice. Jako uživatel si nejprve vyberte cílovou destinaci, kam chcete jet. K tomu může posloužit mapa v menu v hlavičče stránky. Když už víte kam zamíří vše kroky, naplánujte si vlastní itinerář zde. Do formuláře stačí zakliknout body - místa, která chcete navštívit a následně se trasa vykreslí a přehledně zobrazí na mapě. S body je možné nadále pracovat. Využijte i další funkce, jako stav dopravy, počasí ve vybrané lokalitě a místní aktuality. </p>


      <img class="img-menu case" :src="`./assets/img/bgr-img (1).png`" />
      <img class="img-menu van" :src="`./assets/img/bgr-img (2).png`" />
      <img class="img-menu pass" :src="`./assets/img/bgr-img (3).png`" />
      <img class="img-menu alp" :src="`./assets/img/bgr-img (4).png`" />
      <img class="img-menu plane" :src="`./assets/img/bgr-img (5).png`" />
      <img class="img-menu gyro" :src="`./assets/img/bgr-img (6).png`" />
      <img class="img-menu photo" :src="`./assets/img/bgr-img (7).png`" />
      <img class="img-menu globe" :src="`./assets/img/bgr-img (8).png`" />


  </div>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style>
html {
  background-color: rgb(254, 250, 242);
}

.aboutUs {
  padding: 20px;
  background-color: rgb(254, 250, 242);
  position: absolute;
  

}

p {
  position: relative;
  padding: 30px;
  margin: 60px;
  text-align: justify;
  background-color: beige;
  border-radius: 20px;
  box-shadow: 22px 23px 29px -9px rgba(0,0,0,0.67);
}


 /* .case {

 }

.van {

} 
.pass {

}
.alp {

}

.plane {

}
.gyro {

}
.point {

}
.globe {

}
.photo {

} */


</style>
