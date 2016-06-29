<template>
  <div class="home-view">
    <header class="home-header view-header">
      <h1>Hi, I'm Chris</h1>
    </header>
    <div class="home-content view-content">
      <p>My name is Chris Birk and I am a <span class="current-role">{{ roles[currentRole] }}</span> living in Chicago, IL.</p>
      <div class="social-icons">
        <a href="https://twitter.com/cmbirk" target="_blank">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/cmbirk" target="_blank">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="https://www.github.com/cmbirk" target="_blank">
          <i class="fa fa-github"></i>
        </a>
        <a href="mailto:cmbirk@cmbirk.io" target="_blank">
          <i class="fa fa-envelope"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        displayRole: '',
        roles: [
          'software developer',
          'entrepreneur',
          'guitarist',
          'weight lifter',
          'basketball player',
          'golfer',
          'craft beer drinker',
          'whiskey connoisseur',
          'volleyball player'
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
