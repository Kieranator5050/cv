<script lang="ts">
import Card from '@/components/Card.vue';
import Cert from '@/components/Cert.vue';
import certs from '@/data/certs.json';

export default {
  components:{Card, Cert},
  name: "Certifications",
  created() {},
  data() {
    return {      
      certs: certs
    };
  },
  methods: {},
};
</script>

<template>
  <div class="card-group">
    <Cert v-for="cert in certs"
      :link="cert?.link"
      :image="cert.image"
      :heading="cert.heading"
      :description="cert.description"
    />
  </div>

</template>

<style lang="scss" scoped>
.card-group{
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
}

a{
  text-decoration: none;
}
.clickable:hover{
  transform: scale(1.05);
  background-color: #1c293a;
}
</style>