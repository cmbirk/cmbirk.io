<template>
  <div class="resume-view">
    <div class="view-header">
      <h1>Chris Birk's Resumé</h1>
    </div>
    <div class="view-content">
      <div class="white-bg">
        <div class="resume">
          <div class="resume-intro">
            <p>I am a full stack developer.  I use technology to solve real world problems helping real people.</p>
          </div>
          <div class="resume-body">
            <div class="resume-timeline">
              <div class="resume-timeline-experience">
                <h3 class="bold">Experience</h3>
                <timeline :timeline="experience_timeline"></timeline>
              </div>
              <div class="resume-timeline-education">
                <h3 class="bold">Education</h3>
                <timeline :timeline="education_timeline"></timeline>
              </div>
            </div>
            <div class="resume-skills">
              <h3 class="bold">Skills</h3>
              <div class="skill-levels">
                <ul class="level-measurements">
                  <li v-for="n in 11">{{ n }}</li>
                </ul>
              </div>
              <div class="skills">
                <ul>
                  <li v-for="skill in skills | orderBy 'rating' 'name' -1" class="skill-rating rating-{{ skill.rating }}">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-rating-number">{{ skill.rating }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Timeline from '../components/Timeline.vue';
import resumeData from '../../data/resumeData.json';

export default {
  data () {
    return {
      skills: resumeData.skills,
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
        },
        {
          title: 'CTO / Lead Developer at WiseCampus.com',
          description: "Developed system for students to share class notes and get rewarded with gift cards",
          date: new Date(2011, 3)
        },
        {
          title: 'Director of DC Operations at inSourceCode LLC',
          description: "Managed all DC-area clients and development for inSourceCode.  This included custom applications in PHP and Javascript as well as extensive Wordpress development",
          date: new Date(2011, 11)
        },
        {
          title: 'Lead Developer at OpenGov Foundation',
          description: "As first employee and lead developer, created and managed many OSS projects in various languages and technologies.  Some, but not all, include custom PHP, Laravel, AngularJS, NodeJS, Wordpress, Jekyll, and Python",
          date: new Date(2013, 0)
        },
        {
          title: 'Member Board of Directors at OpenGov Foundation',
          description: "Served as one of the original members of the Board of Directors for the OpenGov Foundation",
          date: new Date(2013, 0)
        },
        {
          title: 'Owner / CEO at Divide By Zero LLC',
          description: 'Started LLC to help support a growing civic technology community',
          date: new Date(2016, 2)
        }
      ]
    }
  },
  components: { Timeline }
}
</script>
