<template>
  <div class="container-fluid">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import {router} from '../app';
  import NavMenu from './NavMenu.vue';

  export default {
    data () {
      return {

      };
    },
    components: { NavMenu }
  }
</script>
