<template>
  <div class="container-fluid chicago-bg">
    <nav-menu></nav-menu>
    <router-view transition="fade" transition-mode="out-in"></router-view>
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
