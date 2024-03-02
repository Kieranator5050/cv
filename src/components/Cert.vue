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
  props: {
    link: String,
    image: String,
    heading: String,
    description: Array<String>
  }
};
</script>

<template>
  <a :href="link" target="_blank" :class="link ? '' : 'disable-link'">
      <Card class="clickable" :source-img="image" :heading="heading">
        <p class="card-text" v-for="text in description">{{ text }}</p>
      </Card>
  </a>
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

.disabled-link{
  pointer-events: none;
}
</style>