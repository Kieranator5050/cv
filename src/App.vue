<script lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: "App",
  components: {AppHeader, AppFooter},
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <header>
    <AppHeader/>
  </header>

  <main>
    <Transition name="fade" appear>
      <RouterView />
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
  flex: auto;
  align-items: center;
}

footer{
  background-color: #1c283b;
  margin-top: auto;
}

.fade-enter-active {
  transition: all 0.5s ease-out;
}

.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
