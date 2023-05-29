<script lang="ts">
export default {
  name: "Landing",
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="landing-header">
    <h2>Software Architect</h2>
    <h2>Web Developer</h2>
    <h2>Musician</h2>
  </div>

  <img class="img-fluid mx-auto d-block" id="kieranDeskImg" src="images/computer2mod.png" alt="techpic">
</template>

<style lang="scss" scoped>
.landing-header{
  display: flex;
  flex-direction: row;
}

#kieranDeskImg{
  transition: 400ms;
  width: 50%;
}

</style>