<template>
  <div class="home-view">
    <header class="home-header view-header">
      <h1>Hi, I'm Chris</h1>
    </header>
    <div class="home-content view-content">
      <p>My name is Chris Birk and I am a <span class="current-role">{{ roles[currentRole] }}</span> living in Chicago, IL.</p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        displayRole: '',
        roles: [
          'developer',
          'guitarist',
          'basketball player',
          'golfer',
          'craft beer enthusiast'
        ],
        currentRole: 0
      }
    },
    ready () {
      setInterval(this.changeRole, 4000);
    },
    methods: {
      changeRole () {
        if(this.currentRole != (this.roles.length - 1)) {
          this.currentRole++;
        } else {
          this.currentRole = 0;
        }

      }
    }
  }
</script>
