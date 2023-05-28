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
    <RouterView />
  </main>

  <footer>
    <AppFooter/>
  </footer>
  
</template>

<style scoped>
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
</style>
