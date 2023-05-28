<script lang="ts">
export default {
  name: "Timeline",
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
<div class="timeline">
  <slot></slot>
</div>
</template>

<style lang="scss">
.timeline {
  position: relative;
  background: #272e48;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  padding: 5rem;
  margin: 0 auto 1rem auto;
  overflow: hidden;
}
.timeline:after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -2px;
  border-right: 2px dashed #4b546f;
  height: 100%;
  display: block;
}

@media (max-width: 992px) {
  .timeline {
      padding: 15px;
  }
  .timeline:after {
      border: 0;
  }
  .timeline .timeline-row:nth-child(odd) {
      padding: 0;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-time {
      position: relative;
      top: 0;
      left: 0;
      margin: 0 0 10px 0;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-content {
      margin: 0;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-content:before {
      display: none;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-content:after {
      display: none;
  }
  .timeline .timeline-row:nth-child(even) {
      padding: 0;
  }
  .timeline .timeline-row:nth-child(even) .timeline-time {
      position: relative;
      top: 0;
      left: 0;
      margin: 0 0 10px 0;
      text-align: left;
  }
  .timeline .timeline-row:nth-child(even) .timeline-content {
      margin: 0;
  }
  .timeline .timeline-row:nth-child(even) .timeline-content:before {
      display: none;
  }
  .timeline .timeline-row:nth-child(even) .timeline-content:after {
      display: none;
  }
}
</style>