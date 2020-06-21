<template>
  <div class="aboutUs">
    <p>
      Tato stránka vám v jednoduchých krocích pomůže naplánovat trasu a vytvořit
      vlastní itinerář cesty do vybraného místa v České Reublice. Jako uživatel
      si nejprve vyberte cílovou destinaci, kam chcete jet. K tomu může
      posloužit <router-link to="/places/all">přehled měst</router-link> v menu v hlavičče stránky. Když už
      víte kam zamíří vše kroky, naplánujte si vlastní itinerář <router-link to="/itinerary">zde.</router-link> Do formuláře stačí zakliknout body - místa, která
      chcete navštívit a následně se trasa vykreslí a přehledně zobrazí na mapě.
      S body je možné nadále pracovat. Využijte i další funkce, jako stav
      dopravy, počasí ve vybrané lokalitě a místní aktuality.
    </p>

    
    <img class="img-menu van" :src="`./assets/img/bgr-img (2).png`" />
   
    <img class="img-menu alp" :src="`./assets/img/bgr-img (4).png`" />
    <img class="img-menu plane" :src="`./assets/img/bgr-img (5).png`" />
    <img class="img-menu gyro" :src="`./assets/img/bgr-img (6).png`" />
    
    
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};


</script>

<style>
html {
  background-color: rgb(254, 250, 242);
}

p a {
text-decoration: underline;
  color:rgba(32, 37, 42)
}

.aboutUs {
  
  background-color: rgb(254, 250, 242);
  position: absolute;
  min-height: 100vh;
}

.aboutUs p {
  position: relative;
  padding: 30px;
  margin: 130px 30px 0 30px;
  text-align: justify;
  background-color: rgb(188, 188, 155);
  border-radius: 20px;
  /* box-shadow: 2px 1px 10px 10px #959595; */
  box-shadow: 22px 23px 29px -9px rgba(0, 0, 0, 0.67);
}

 

.van {
right: 20vw;
position: absolute;
top: 60vh;
} 

.alp {
right: 60vw;
position: absolute;
top: 50vw;
}

img.plane {
right: 80vw;
position: absolute;
top: 0vw;
/* width: 15%;
height: 15%; */
}
img.gyro {
right: 0vw;
position: absolute;
top: 10vh;

}
.point {
right: 10vw;
position: absolute;
bottom: 0vw;
}

</style>
