<template>
  <div class="home">
    <p>
      Plánujete výlet a nevíte kam?
      <br />U nás najdete všechny krásy České republiky pohodlně na jednom místě.
      <br />Stačí párkrát kliknout a my za vás pohodlně naplánujeme trasu.
    </p>
    <br />

    <img class="img-menu photo" :src="`./assets/img/bgr-img (7).png`" />
    <img class="img-menu case" :src="`./assets/img/bgr-img (1).png`" />
    <img class="img-menu globe" :src="`./assets/img/bgr-img (8).png`" />
    <img class="img-menu pass" :src="`./assets/img/bgr-img (3).png`" />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style >
.home {
  background-color: rgb(254, 250, 242);
  position: absolute;
  min-height: 100vh;
}

.home p {
  display: flex;
  justify-content: center;
  position: relative;
  padding: 30px;
  margin: 130px 30px 0 30px;
  text-align: justify;
  background-color: #bcdde2;
  border-radius: 20px;
  /* box-shadow: 2px 1px 10px 10px #959595; */
  box-shadow: 22px 23px 29px -9px rgba(0, 0, 0, 0.67);
  /* z-index: 1; */
}

.case {
  left: 0vw;
  position: absolute;
  bottom: 27vh;
  clip: inherit;
}

.globe {
  right: 0vw;
  position: absolute;
  top: 10vh;
}
.photo {
  right: 5vw;
  position: absolute;
  bottom: 15vh;
}

.pass {
  right: 40vw;
  position: absolute;
  bottom: 0vw;
}

@media screen and (max-width: 390px) {
  .photo {
    right: 5vw;
    position: absolute;
    bottom: 15vh;
    display: none;
  }
  .case {
    left: 0vw;
    position: absolute;
    bottom: 30vh;
    display: none;
  }
}

/* PC */
@media screen and (min-width: 961px) {
  .home .p {
    justify-content: center;
  }
}
</style>