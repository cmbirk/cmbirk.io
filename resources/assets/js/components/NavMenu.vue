<template>
  <nav v-bind:class="{'active': navToggle}" v-on:click="toggleNav">
    <i class="fa fa-bars"></i>
    <ul>
      <li>
        <a v-link="'/'">Home</a>
      </li>
      <li>
        <a v-link="'/about'">About</a>
      </li>
      <li>
        <a v-link="'/resume'">Resumé</a>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    data () {
      return {
        navToggle: false
      }
    },
    methods: {
      toggleNav () {
        this.navToggle = !this.navToggle;
      }
    },
    replace: false
  }
</script>
