<script lang="ts">
export default {
  name: "TimelineRow",
  created() {},
  data() {
    return {};
  },
  props: {
    date: String,
    heading: String,
    sourceImg: String,
  },
  methods: {},
};
</script>

<template>
  <div class="timeline-row">
    <div class="timeline-time">
      {{ date }}
    </div>
    <div class="timeline-content">
      <img class="timeline-image" :src="'/'+sourceImg"/>
      <h2 class="heading">{{ heading }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
h2{
  font-size: 20px;
}
.timeline-image{
  width: 150px;
  background-color: #bcd0f7;
  padding: 25px;
  border-radius: 25px;
}

.timeline-row {
  padding-left: 50%;
  position: relative;
  margin-bottom: 30px;
}
.timeline-row .timeline-time {
  position: absolute;
  right: 50%;
  top: 15px;
  text-align: right;
  margin-right: 20px;
  color: #bcd0f7;
  font-size: x-large;
}
.timeline-row .timeline-time small {
  display: block;
}
.timeline-row .timeline-content {
  position: relative;
  padding: 20px 30px;
  background: #101721;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  &:hover{
    background-color: #18222e;
  }
}
.timeline-row .timeline-content:after {
  content: "";
  position: absolute;
  top: 20px;
  height: 16px;
  width: 16px;
  background: #101721;
}
.timeline-row .timeline-content:before {
  content: "";
  position: absolute;
  top: 20px;
  right: -49px;
  width: 20px;
  height: 20px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  z-index: 10;
  background: #101721;
  border: 2px dashed #4b546f;
}
.timeline-row .timeline-content h4 {
  margin: 0 0 20px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 150%;
}
.timeline-row .timeline-content p {
  margin-bottom: 30px;
  line-height: 150%;
}
.timeline-row .timeline-content i {
  line-height: 100%;
  padding: 15px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  background: #101721;
  margin-bottom: 10px;
  display: inline-block;
}
.timeline-row .timeline-content .thumbs {
  margin-bottom: 20px;
  display: flex;
}
.timeline-row .timeline-content .thumbs img {
  margin: 5px;
  max-width: 60px;
}
.timeline-row .timeline-content .badge {
  color: #ffffff;
  background: linear-gradient(120deg, #00b5fd 0%, #0047b1 100%);
}
.timeline-row:nth-child(even) .timeline-content {
  margin-left: 40px;
  text-align: left;
}
.timeline-row:nth-child(even) .timeline-content:after {
  left: -8px;
  right: initial;
  border-bottom: 0;
  border-left: 0;
  transform: rotate(-135deg);
}
.timeline-row:nth-child(even) .timeline-content:before {
  left: -52px;
  right: initial;
}
.timeline-row:nth-child(odd) {
  padding-left: 0;
  padding-right: 50%;
}
.timeline-row:nth-child(odd) .timeline-time {
  right: auto;
  left: 50%;
  text-align: left;
  margin-right: 0;
  margin-left: 20px;
}
.timeline-row:nth-child(odd) .timeline-content {
  margin-right: 40px;
}
.timeline-row:nth-child(odd) .timeline-content:after {
  right: -8px;
  border-left: 0;
  border-bottom: 0;
  transform: rotate(45deg);
}
</style>