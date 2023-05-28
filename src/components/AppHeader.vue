<script lang="ts">
import { RouterLink } from 'vue-router';
export default {
  name: "AppHeader",
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="container-fluid text-center m-0 pt-5 p-1" id="mainHead">
        
    <img class="img-fluid mx-auto d-block rounded-circle kieranPfPImg mb-2" src="images/Kieran_potato.jpg" alt="kieran-pic">

    <RouterLink class="title text-decoration-none" to="/"> KIERAN JAGGERNAUTH </RouterLink>
    
    <nav>
        <RouterLink to="/certs" class="text-decoration-none" type="button">
          <i class="fa-solid fa-code text-primary"></i> CERTIFICATIONS & SKILLS
        </RouterLink>
        <RouterLink to="/portfolio" class="text-decoration-none" type="button">
          <i class="fa-solid fa-window-maximize text-primary"></i> PORTFOLIO
        </RouterLink>
        <RouterLink to="/experience" class="text-decoration-none" type="button">
          <i class="fa-solid fa-music text-primary"></i> EXPERIENCE
        </RouterLink>
    </nav>

  </div>
</template>

<style lang="scss" scoped>
nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.active{
  color: #4AE85B; 
  font-size:xx-large;
}

h1{
  transition: 400ms;
  color: #4AE85B;
  &:hover{
      transition: 200ms;
      font-size: 260%;
  }
}

.kieranPfPImg{
  transition: 400ms;
  width: 160px;
  animation: pulse 3s linear infinite;
}
/*
  Image Animation
*/
@keyframes pulse {
  0% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
  }
  50% {
     -webkit-transform: scale(1.05);
     transform: scale(1.05);
  }
  100% {
      -webkit-transform: scale(1);
     transform: scale(1);
  }
}
</style>