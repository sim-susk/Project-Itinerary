import Vue from 'vue';
import VueRouter from 'vue-router'
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Itinerary from './components/Itinerary';
import Places from './components/Places';
import App from './components/App';
import Search from './components/Search';
import './index.html';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/aboutUs', component: AboutUs },
    { path: '/home', component: Home },
    { path: '/itinerary', component: Itinerary },
    { path: '/places', component: Places },

    { path: '/search', component: Search },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});