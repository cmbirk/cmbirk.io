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
          <div class="resume-download">
            <button class="btn btn-primary" v-on:click="downloadResume">Download Resumé</button>
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
            <div class="resume-contact">
              <h3 class="bold">Contact</h3>
              <ul>
                <li>
                  <i class="fa fa-envelope"></i>
                  <a href="mailto:cmbirk@cmbirk.io" target="_blank">cmbirk@cmbirk.io</a>
                </li>
                <li>
                  <i class="fa fa-twitter"></i>
                  <a href="https://twitter.com/cmbirk" target="_blank">@cmbirk</a>
                </li>
                <li>
                  <i class="fa fa-linkedin"></i>
                  <a href="https://linkedin.com/in/cmbirk" target="_blank">LinkedIn/cmbirk</a>
                </li>
              </ul>
            </div>
            <div class="resume-work">
              <h3 class="bold">Work</h3>
              <i class="fa fa-github"></i>
              <a href="https://github.com/cmbirk" target="_blank">cmbirk</a>
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
                  <h4>Languages</h4>
                  <li v-for="skill in skills.language | orderBy 'rating' 'name' -1" class="skill-rating rating-{{ skill.rating }}">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-rating-number">{{ skill.rating }}</span>
                  </li>
                  <h4>Frameworks</h4>
                  <li v-for="skill in skills.framework | orderBy 'rating' 'name' -1" class="skill-rating rating-{{ skill.rating }}">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-rating-number">{{ skill.rating }}</span>
                  </li>
                  <h4>DevOps</h4>
                  <li v-for="skill in skills.devops | orderBy 'rating' 'name' -1" class="skill-rating rating-{{ skill.rating }}">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-rating-number">{{ skill.rating }}</span>
                  </li>
                  <h4>Tooling</h4>
                  <li v-for="skill in skills.tooling | orderBy 'rating' 'name' -1" class="skill-rating rating-{{ skill.rating }}">
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
import ResumeGenerator from '../services/ResumeGenerator';

export default {
  methods: {
    downloadResume: function () {
      var generator = new ResumeGenerator();
      generator.loadResumeData(resumeData);
      generator.createPDF();
    }
  },
  computed: {
    education_timeline: function () {
      var timeline = resumeData.education;
      timeline.forEach(function (item) {
        item.date = new Date(item.date[0], item.date[1]);
      });

      return timeline;
    },
    experience_timeline: function () {
      var timeline = resumeData.experience;
      timeline.forEach(function (item) {
        item.date = new Date(item.date[0], item.date[1]);
      });

      return timeline;
    }
  },
  data () {
    return {
      skills: resumeData.skills,
    }
  },
  components: { Timeline }
}
</script>
