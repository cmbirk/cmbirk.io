/**
* Vue Setup
*/

import Vue from 'vue';
import VueAsyncData from 'vue-async-data';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

Vue.use(VueAsyncData);
Vue.use(VueResource);
Vue.use(VueRouter);

import App from './components/App.vue';
import ResumeView from './views/ResumeView.vue';
import HomeView from './views/HomeView.vue';

export var router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomeView },
    { path: '/resume', component: ResumeView },
  ]
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
