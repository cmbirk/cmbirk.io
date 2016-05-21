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
  //import AboutView from './views/AboutView.vue';
  import ResumeView from './views/ResumeView.vue';
  import HomeView from './views/HomeView.vue';

  Vue.config.debug = true;

  Vue.transition('fade', {
    type: 'transition',
  });

  export var router = new VueRouter({
    history: true
  });

  router.map({
    '/': {
      component: HomeView
    },
    'resume': {
      component: ResumeView
    }
  });

  router.redirect({
    '*': '/'
  });

  router.start(App, '#app');
