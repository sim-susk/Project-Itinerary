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

    <img class="img-menu van" :src="`./assets/img/bgr-img (2).png`" />

    <img class="img-menu alp" :src="`./assets/img/bgr-img (4).png`" />
    <img class="img-menu plane" :src="`./assets/img/bgr-img (5).png`" />
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

.aboutUs {
  background-color: rgb(254, 250, 242);
  /* position: absolute; */
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
  color: rgba(0, 0, 0, 0.67) !important;
  
}

.van {
  right: 20vw;
  position: absolute;
  top: 75vh;
}

.alp {
  right: 75vw;
  position: absolute;
  top: 85vh;
}

.plane {
  right: 50vw;
  position: absolute;
  top: 25vh;
}
.gyro {
  right: 0vw;
  position: absolute;
  top: 32vh;
}
.point {
  right: 10vw;
  position: absolute;
  bottom: 0vh;
}


@media screen and (max-width: 590px) {
  .van {
    display: none;
  }
  
}

@media screen and (max-width: 540px) {
.alp {
    display: none;
  }
}

/* PC */
@media screen and (m-width: 961px) {
  
}
</style>
