<script lang="ts">
import TimelineRow from '@/components/TimelineRow.vue';
import Timeline from '@/components/Timeline.vue';
import experiences from '@/data/experiences.json';

export default {
  components: {TimelineRow, Timeline},
  name: "Experience",
  created() {},
  data() {
    return {
      experiences: experiences
    };
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <Timeline>
      <TimelineRow v-for="experience in experiences"
      :heading="experience.heading" 
      :source-img="experience.image"
      :date="experience.date"
      >
        <h3>{{ experience.role }}</h3>
        <ul class="list-group text-start">
          <li class="list-group-item" v-for="skill in experience.skills"> {{ skill }} </li>
        </ul>
        <p>{{ experience.description }}</p>
      </TimelineRow>
    </Timeline>
  </div>
</template>

<style lang="scss" scoped>
h3{
  font-size: 18px;
  font-weight: bold;
  pointer-events:none;
}

p {
  color: wheat;
  padding: 5px;
  pointer-events:none;
}

.list-group{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  pointer-events:none;
}

.list-group-item{
  background-color: #b46d34;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: bolder;
  filter:opacity(0.9);
  margin: 5px;
  border-radius: 10%;
}
</style>