<template>
  <ul class="timeline">
    <timeline-event v-for="event in orderedEvents" :title="event.title" :description="event.description" :date="event.date"></timeline-event>
  </ul>
</template>
<script>
  import TimelineEvent from './TimelineEvent.vue';

  export default {
    props: ['timeline'],
    components: { TimelineEvent },
    computed: {
      orderedEvents: function () {
        return _.orderBy(this.timeline, 'date', 'desc');
      }
    }
  }
</script>
