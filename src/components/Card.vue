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
  methods: {},
};
</script>

<template>
  <div class="card" style="width: 18rem;">
    <img :src="sourceImg" class="card-img-top" :alt="sourceImg">
    <div class="card-body">
      <h4 class="card-title">{{ heading }}</h4>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card{
  background-color: #101721;
  margin: 0 10px 10px 10px;
}

h4{
  color: orange;
}
</style>