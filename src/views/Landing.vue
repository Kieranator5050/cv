<script lang="ts">
export default {
  name: "Landing",
  created() {},
  props:{
    mode: Number
  },
  data() {
    return {};
  },
  methods: {
    setMode(screen: number){
      //Emiting event (updateMode) to parent component (App)
      this.$emit("updateMode", screen);
    }
  },
};
</script>

<template>
  <div class="landing-header">
    <h2 :class="mode===1 ? 'active' : ''" @click="setMode(1)">Software Architect</h2>
    <h2 :class="mode===2 ? 'active' : ''" @click="setMode(2)">Web Developer</h2>
    <h2 :class="mode===3 ? 'active' : ''" @click="setMode(3)">Musician</h2>
  </div>

  <img class="img-fluid mx-auto d-block" id="kieranDeskImg" src="/images/computer2mod.png" alt="techpic">
</template>

<style lang="scss" scoped>
.landing-header{
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
}

.landing-header > h2{
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin-top: 10px;
  }

  &:hover{
    transform: scale(1.1);
    cursor: pointer;
  }
}

.active{
  font-weight: bolder;
  transform: scale(1.1);
}

#kieranDeskImg{
  transition: 400ms;
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
}

</style>