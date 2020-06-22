<template>
<div class="home">
  <h1 class="title"> Cestovní itinerář </h1>
  <h2> Plánujete výlet a nevíte kam? </h2>
  <h3>U nás najdete všechny krásy České republiky pohodlně na jednom místě.</h3>
    <div id="btn--home">
      <router-link to="/places/all">
        <b-button class="search" pill variant="info">Nejdříve vyberu kam pojedu</b-button>
      </router-link>
    </div>
  <h3>Stačí kliknout a my za vás pohodlně naplánujeme trasu.</h3>
    <div id="btn-home">
      <router-link to="/itinerary">
        <b-button class="plan" pill variant="info">Chci začít plánovat</b-button>
      </router-link>
    </div>

<img class="img-menu photo" :src="`./assets/img/bgr-img (7).png`" />
<img class="img-menu pass" :src="`./assets/img/bgr-img (3).png`" />
<img class="img-menu globe" :src="`./assets/img/bgr-img (8).png`" />

<img class="img-menu plane" :src="`./assets/img/bgr-img (5).png`" />

</div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  background-color: rgb(254, 250, 242);
  /* position: absolute; */
  min-height: 100vh;
  width: 100vw;
}

.title {
font-family: 'Pacifico', cursive;
text-align: center;
font-size: 5em;
}

h1, h2, h3 {
  color: #4b4b48 !important;
padding: 20px; 
 font-size: 1.5em;
  text-align: center;
}

h3 {
  font-size: 1.2em;
}

#btn-home, #btn--home {
  display: flex; 
 justify-content: center;
}


.search, .plan {
  background-color: #ec7568 !important;
  border-color: #ec7568 !important;
text-transform: uppercase;
padding: 5px !important;
font-size: 1.15em;
}


.globe {
  left: 67vw;
  position: absolute;
  top: 78vh;
 
}



.plane {
  right: 4vw;
  position: absolute;
  top: 35vh;
 
}
.photo {
  right: 75vw;
  position: absolute;
  bottom: 0vh;

}

.pass {
  left: 7vw;
  position: absolute;
  top: 35vh;
 
}

@media screen and (max-width: 675px) {
  .photo, .pass, .plane, .globe {
    display: none;
  }
  
}

/* PC */
/* @media screen and (max-width: 961px) {
  .home .p {
    display: flex;
    justify-content: center;
    text-align: justify;
  }
} */
</style>