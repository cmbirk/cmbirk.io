<template>
  <ul class="timeline">
    <timeline-event v-for="event in timeline | orderBy 'date' -1" :title="event.title" :description="event.description" :date="event.date"></timeline-event>
  </ul>
</template>
<script>
  import TimelineEvent from './TimelineEvent.vue';

  export default {
    props: ['timeline'],
    components: { TimelineEvent }
  }
</script>
