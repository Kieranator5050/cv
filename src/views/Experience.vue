<script lang="ts">
import TimelineRow from '@/components/TimelineRow.vue';
import Timeline from '@/components/Timeline.vue';
export default {
  components: {TimelineRow, Timeline},
  name: "Experience",
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <Timeline>

      <TimelineRow 
      date="June, 2020" 
      heading="Mona School of Business" 
      source-img="images/msbm.png"
      >
        <h3>Technical Support Representative</h3>
        <h4>Responsibilities</h4>
        <ul class="list-group text-start">
          <li class="list-group-item">Assisting staff and students with technical issues</li>
          <li class="list-group-item">Troubleshooting hardware and software issues</li>
          <li class="list-group-item">Inventory management</li>
          <li class="list-group-item">
            Completing project-based work and other assigned duties
            <ul class="list-group sub-goup text-start">
              <li class="list-group-item">Statistical Institute of Jamaica Digital Classroom Creation</li>
              <li class="list-group-item">Caribbean School of Data Digital Classroom Creation</li>
            </ul>
          </li>
        </ul>
      </TimelineRow>

      <TimelineRow 
      date="October, 2022" 
      heading="Bloom Project" 
      source-img="images/techports.png"
      >
        <h3>Backend API Developer</h3>
        <h4>Responsibilities</h4>
        <ul class="list-group text-start">
          <li class="list-group-item">Worked on an API to retrieve up-to-date gas prices and gas station locations for use in a mobile app called “GasVis”</li>
          <li class="list-group-item">Performed requirements analysis and elicitation</li>
          <li class="list-group-item">Analyzed the feasibility of the solution and performed a competitor’s analysis </li>
          <li class="list-group-item">Moderated Sprint Cycles and created the project structure</li>
          <li class="list-group-item">Assisted the team with frontend prototyping and design</li>
        </ul>
      </TimelineRow>

      <TimelineRow 
      date="November, 2022" 
      heading="Seeds for the Future" 
      source-img="images/huawei.png"
      >
        <h3>Participant</h3>
        <h4>Responsibilities</h4>
        <ul class="list-group text-start">
          <li class="list-group-item">Learned about topics in the fields of 5G, AI and Cloud Computing from industry experts.</li>
          <li class="list-group-item">Created a project in line with the UN Sustainable Development Goals.</li>
        </ul>
      </TimelineRow>

    </Timeline>
      

  </div>
</template>

<style lang="scss" scoped>
h3{
  font-size: 18px;
  font-weight: bold;
}

h4{
  font-size: 18px;
}

.list-group{
}

.list-group-item{
  background-color: #1c283b;
  color: rgb(255, 255, 255);
  font-size: 12px;
  filter:opacity(0.9);
}

.sub-goup > .list-group-item{
  background-color: #182130;
}
</style>