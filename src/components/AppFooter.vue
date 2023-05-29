<script lang="ts">
export default {
  name: "AppFooter",
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="container-fluid text-center" id="contactInfo">
    <a class="btn" href="mailto:kieranjag@hotmail.com">
      <img src="/images/hotmail.png" alt="">
    </a>
    <a class="btn" href="http://www.linkedin.com/in/kieran-jaggernauth-0750161b1">
      <img src="/images/linkedin.png" alt="">
    </a>
    <a class="btn" href="https://github.com/Kieranator5050">
      <img src="/images/github.png" alt="">
    </a>
    <a class="btn" href="https://stackoverflow.com/users/11053112/kieranator5050">
      <img src="/images/stack-overflow.png" alt="">
    </a>
    <p>© 2022 Kieran Jaggernauth.</p>
  </div>
</template>

<style lang="scss">
  a > img{
    transition: 400ms;
    width: 50px;
    &:hover{
      transition: 200ms;
      transform: scale(1.2);
    }
  }
</style>