<script lang="ts">
import Card from '@/components/Card.vue';
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
    <a href="https://www.credly.com/badges/7d8ee144-75ac-4478-9e43-7f8b7731d406/public_url" target="_blank">
      <Card class="clickable" source-img="/images/cpsa-f.png" heading="ISAQB CPSA-F">
        <p class="card-text">Certified Professional for Software Architecture - Foundation Level</p>
      </Card>
    </a>

    <a href="https://www.credly.com/badges/efbd111f-a0d6-463a-a119-81e531f5af14/public_url" target="_blank">
      <Card class="clickable" source-img="/images/aws-cloudpracticioner.png" heading="AWS CLF-01">
        <p class="card-text">AWS Cloud Practitioner Foundational</p>
      </Card>
    </a>


    <Card source-img="/images/PMCert.png" heading="Project Management">
      <p class="card-text">Mona School of Business & Management - Principles & Practicies of Project Management Certificate of Achievement</p>
    </Card>

    <Card source-img="/images/seed4future.png" heading="Seeds for the Future">
      <p class="card-text">Huawei - Seeds for the Future Certification of Participation</p>
      <p class="card-text">Learned about 5G, Cloud Computing, AI & Digital Power</p>
    </Card>
  </div>

</template>

<style lang="scss" scoped>
a{
  text-decoration: none;
}
.clickable:hover{
  transform: scale(1.05);
  background-color: #1c293a;
}
</style>