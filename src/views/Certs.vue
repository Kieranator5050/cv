<script lang="ts">
import Card from '../components/Card.vue';
export default {
  components:{Card},
  name: "Certifications",
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="card-group">
    <Card source-img="images/certs/cpsa-f.png" heading="ISAQB CPSA-F">
      <p class="card-text">Certified Professional for Software Architecture - Foundation Level</p>
    </Card>

    <Card source-img="images/certs/aws-cloudpracticioner.png" heading="AWS CLF-01">
      <p class="card-text">AWS Cloud Practitioner Foundational</p>
    </Card>

    <Card source-img="images/certs/PMCert.png" heading="Project Management">
      <p class="card-text">Mona School of Business & Management - Principles & Practicies of Project Management Certificate of Achievement</p>
    </Card>

    <Card source-img="images/certs/seed4future.png" heading="Seeds for the Future">
      <p class="card-text">Huawei - Seeds for the Future Certification of Participation</p>
      <p class="card-text">Learned about 5G, Cloud Computing, AI & Digital Power</p>
    </Card>
  </div>

</template>

<style lang="scss" scoped>
</style>