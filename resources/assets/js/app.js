/**
 *  Browserify Entrypoint
 */

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
  import HomeView from './views/HomeView.vue';

  Vue.config.debug = true;

  export var router = new VueRouter({
    history: true
  });

  router.map({
    '/': {
      component: HomeView
    }
  });

  router.redirect({
    '*': '/'
  });

  router.start(App, '#app');
