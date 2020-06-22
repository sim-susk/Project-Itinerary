<template>
  <div class="aboutUs">
    <p>
      Tato stránka vám v jednoduchých krocích pomůže naplánovat trasu a vytvořit
      vlastní itinerář cesty do vybraného místa v České Reublice.
      <br>
      Jako uživatel
      si nejprve vyberte cílovou destinaci, kam chcete jet. K tomu může
      posloužit <router-link to="/places/all">přehled měst</router-link> v menu v hlavičče stránky. Když už
      víte kam zamíří vše kroky, naplánujte si vlastní itinerář <router-link to="/itinerary">zde.</router-link> Do formuláře pak už jen stačí zakliknout body - místa, která
      chcete navštívit a následně se trasa vykreslí a přehledně zobrazí na mapě. Využijte i další tlačítka, díky nim si můžete výlet naplánovat pěšky, autem, či využijete městskou hromadnou dopravu.
    </p>

<img class="img-menu case" :src="`./assets/img/bgr-img (1).png`" />

<img class="img-menu van" :src="`./assets/img/bgr-img (2).png`" />
   

    <img class="img-menu alp" :src="`./assets/img/bgr-img (4).png`" />
    <img class="img-menu gyro" :src="`./assets/img/bgr-img (6).png`" />
  </div>
</template>

<script>
export default {
  name: "AboutUs"
};
</script>

<style>
html {
  background-color: rgb(254, 250, 242);
}

p a {
text-decoration: underline;
  color: #EC7568;
  font-weight: bold;
}

.van {
    right: 43vw;
    position: absolute;
    top: 82vh;
    
}

.aboutUs {
  background-color: rgb(254, 250, 242);
  min-height: 100vh;
}

.aboutUs p {
  position: relative;
  text-align: justify;
  padding: 30px;
  margin: 130px 40px 0 40px;
  background-color: #bcdde2;
  border-radius: 20px;
  box-shadow: 22px 23px 29px -9px rgba(0, 0, 0, 0.67);
  color: rgba(0, 0, 0, 1.67) !important;
  font-size: 1.2em;
}

.van {
  right: 20vw;
  position: absolute;
  top: 75vh;
}

.alp {
  right: 60vw;
  position: absolute;
  top: 20vh;
  
}

.case {
  right: 73vw;
  position: absolute;
  top: 80vh;
}
.gyro {
  right: 0vw;
  position: absolute;
  top: 24vh;
}



@media screen and (max-width: 730px) {
  .case, .van {
    display: none;
  }
}

@media screen and (max-width: 640px) {
  
.alp {
  display: none;
}
}


</style>
