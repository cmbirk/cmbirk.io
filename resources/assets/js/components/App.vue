<template>
  <div class="container-fluid">
    <nav-menu></nav-menu>
    <transition 
      name="fade"
      mode="out-in"
    >
      <router-view></router-view>  
    </transition>
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
