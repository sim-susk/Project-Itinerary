<template>
  <div class="city">
    

    <router-link :to="{ path: '/itinerary/' + url }">
      <div class="item">
        <p class="text">{{ text }}</p>
        <img class="img" :src="`/assets/img-places/${imgSrc}`" />
        <div class="content">
          <h1 class="name">{{ name }}</h1>
          <h2 class="title">{{ title }}</h2>
        </div>
      </div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "City",
  props: ["id", "url", "name", "title", "text", "imgSrc", "altSrc"]
};
</script>

<style scoped>
.item {
  position: relative;
  height: 400px;
  background-color: rgb(171, 171, 171);
  border-radius: 20px;
}

.title,
.name {
  color: white;
  z-index: 1;
  border-radius: 20px 20px 0 0;
}

.title {
  font-size: 1em;
  font-style: italic;
  padding: 0 5px;
}

.name {
  font-size: 1.7em;
  position: relative;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px 20px 0px 0;
  background: linear-gradient(180deg, #011123 20%, rgba(0,0,0,0) 100%);
}
.city a:hover {
  text-decoration: none;
}
.text {
  z-index: 2;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgb(3, 27, 47);
  color: white;

  font-size: 16px;
  line-height: 18px;
  text-align: left;
  padding: 30px;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.5s;

}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
}

.item:hover .text {
  display: block;
  opacity: 1;
}

.city {
  display: block;
  text-align: center;
  border-radius: 10px;
  margin: 20px;
}

@media screen and (min-width: 660px) and (max-width: 1044px) {
  .city {
    align-items: center;
    width: calc(50% - 20px);
    margin: 8px;
    
  }
}

@media screen and (min-width: 1045px) {
  .city {
    
    width: calc(33% - 38px);
    justify-content: center;
  }
}
</style>
