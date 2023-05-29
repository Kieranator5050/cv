<script lang="ts">
export default {
  name: "Card",
  created() {},
  data() {
    return {};
  },
  props: {
    sourceImg: String,
    heading: String
  },
  methods: {
    getPic () {
      return '/cv/'+this.sourceImg;
    }
  },
};
</script>

<template>
  <div class="card" style="width: 18rem;">
    <img :src="getPic()" class="card-img-top" :alt="sourceImg">
    <div class="card-body">
      <h4 class="card-title">{{ heading }}</h4>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card{
  background-color: #101721;
  margin: 0 20px 10px 20px;
}

h4{
  color: orange;
}
</style>