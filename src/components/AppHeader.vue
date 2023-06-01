<script lang="ts">
import { RouterLink } from 'vue-router';
export default {
  name: "AppHeader",
  created() {},
  props: {
    mode: Number
  },
  data() {
    return {};
  },
  methods: {
    loadImg(mode: number | undefined){
      if (mode) {
        const imgArr = ["/images/Kieran_potato.jpg","/images/Kieran_dev.jpg","/images/Kieran_music.jpg"]
        return imgArr[mode-1]; //Mode number starts at 1
      }
    }
  },
};
</script>

<template>
  <div class="container-fluid text-center m-0 pt-5 p-1" id="mainHead">
        
    <img :src="loadImg(mode)" v-bind:alt="mode?.toString()" class="img-fluid mx-auto d-block rounded-circle kieranPfPImg mb-2"  >

    <RouterLink class="title text-decoration-none name" to="/"> KIERAN JAGGERNAUTH </RouterLink>
    
    <nav>
        <RouterLink to="/certs" class="text-decoration-none" type="button">
          <i :class="$route.path==='/certs' ? 'fa-solid fa-certificate text-warning' : 'fa-solid fa-certificate' "></i> CERTIFICATIONS
        </RouterLink>
        <RouterLink to="/portfolio" class="text-decoration-none" type="button">
          <i :class=" $route.path==='/portfolio' ? 'fa-solid fa-folder-open text-warning' : 'fa-solid fa-folder'"></i> PORTFOLIO
        </RouterLink>
        <RouterLink to="/experience" class="text-decoration-none" type="button">
          <i :class="$route.path==='/experience' ? 'fa-solid fa-timeline text-warning' : 'fa-solid fa-timeline'"></i> EXPERIENCE
        </RouterLink>
        <RouterLink to="/about" class="text-decoration-none" type="button">
          <i :class="$route.path==='/about' ? 'fa-solid fa-user text-warning' : 'fa-solid fa-user'"></i> ABOUT
        </RouterLink>
    </nav>

  </div>
</template>

<style lang="scss" scoped>
.name{
  &:hover{
    font-size: 22px;
  }
}

nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
}

.active{
  color: #4AE85B; 
  font-size: 20px;
}

a{
  transition: 400ms;
  margin: 15px;
  font-size: 18px;
  letter-spacing: 1.5px;
  @media only screen and (max-width: 600px) {
    margin: 5px;
    font-size: 16px;
    letter-spacing: 1px;
  }
  &:hover{
      transition: 200ms;
      transform: scale(1.1);
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