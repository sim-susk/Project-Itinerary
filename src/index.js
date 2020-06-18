import Vue from 'vue';
import VueRouter from 'vue-router'
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Itinerary from './components/Itinerary';
import Places from './components/Places';
import App from './components/App';
import './index.html';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as GmapVue from 'gmap-vue'

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(VueRouter);

Vue.use(GmapVue, {
  load: {
    key: 'AIzaSyCu6wdPTON4O0qKgp6Hs7dspsAvmjTMTqc',
    libraries: 'places',
  },
  installComponents: true
})

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/aboutUs', component: AboutUs },
    { path: '/home', component: Home },
    { path: '/itinerary/', component: Itinerary },
    { path: '/itinerary/:id', component: Itinerary },
    { path: '/places', component: Places },
    //{ path: '*', component: PageNotFound }
  ],
});

new Vue({
  el: '#app',
  mode: 'history',
  router: router,
  render: h => h(App),
});