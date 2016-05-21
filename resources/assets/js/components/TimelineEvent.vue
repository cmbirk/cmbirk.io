<template>
  <li class="timeline-event">
    <div class="timeline-event-year">{{ date }}</div>
    <div class="timeline-event-body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </li>
</template>
<script>
  export default {
    props: {
      title: String,
      description: String,
      date: {
        coerce: (val) => {
          return val.getFullYear();
        }
      }
    }
  }
</script>
