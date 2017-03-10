<template>
  <nav v-bind:class="{'active': navToggle}" v-on:click="toggleNav">
    <i class="fa fa-bars"></i>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/resume">Resumé</router-link>
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
    }
  }
</script>
