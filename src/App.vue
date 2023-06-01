<script lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: "App",
  components: {AppHeader, AppFooter},
  created() {
    const storedMode = localStorage.getItem('mode');
    if (storedMode) {
      this.mode = parseInt(storedMode);
    }
    
  },
  data() {
    return {
      mode: 1
    };
  },
  methods: {
    setMode(newMode: number){
      this.mode = newMode;
      localStorage.setItem('mode',this.mode.toString());
    }
  },
};
</script>

<template>
  <header>
    <AppHeader :mode="mode"/>
  </header>

  <main>
    <Transition name="fade" appear>
      <RouterView @updateMode="setMode" :mode="mode" />
    </Transition>
  </main>

  <footer>
    <AppFooter/>
  </footer>
  
</template>

<style lang="scss">
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header{
  background-color: #131C2A;
  margin: 0;
}

main{
  background-color: #131C2A;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer{
  background-color: #1c283b;
  margin-top: auto;
  flex: auto;
}

.fade-enter-active{
  transition: all 0.5s ease-in-out;
}

.fade-leave-active {
  transition: all 0.5s ease-in-out;
  transform: translateX(15px);
}

.fade-enter-from{
  transform: translateY(30px);
  opacity: 0;
}

.fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
