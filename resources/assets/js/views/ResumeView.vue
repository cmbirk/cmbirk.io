<template>
  <div class="resume-view">
    <div class="view-header">
      <h1>Chris Birk's Resumé</h1>
    </div>
    <div class="view-content">
      <div class="white-bg">
        <div class="resume">
          <div class="resume-intro">
            <p>I am a full stack developer.  I'm driven to use technology to solve real world problems helping real people.</p>
          </div>
          <div class="resume-timeline">
            <h3>Education</h3>
            <timeline :timeline="education_timeline"></timeline>
            <h3>Experience</h3>
            <timeline :timeline="experience_timeline"></timeline>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Timeline from '../components/Timeline.vue';

export default {
  data () {
    return {
      education_timeline: [
        {
          title: 'I was born in Indianapolis',
          description: 'My birthday is December 30, 1987',
          date: new Date(1987, 11, 30)
        },
        {
          title: 'Graduated from Cathedral High School',
          description: 'in Indianapolis, IN',
          date: new Date(2006, 4)
        },
        {
          title: 'Graduated from Purdue University',
          description: 'with a BS in Computer Science',
          date: new Date(2010, 11)
        }
      ],
      experience_timeline: [
        {
          title: 'Developer at OneAmerica',
          description: "Developed internal systems and tools for OneAmerica, a mutual insurance holding company",
          date: new Date(2011, 0)
        }
      ]
    }
  },
  components: { Timeline }
}
</script>
