<script lang="ts">
import Card from '@/components/Card.vue';
export default {
    name: "Portfolio",
    created() { },
    data() {
        return {};
    },
    methods: {},
    components: { Card }
};
</script>

<template>
  <div class="card-group">  
    <a class="link" href="https://gabbzbr.wixsite.com/speak-ez" target="_blank">
      <Card
      class="clickable"
      heading="SpeakEzAAC"
      source-img="images/speakez.png"
      >
      <p>Capstone Project for Computer Science at UWI</p>
      <p>An intuitive AAC appliction designed to help children with speech or hearing impediments communicate</p>
      <a class="btn" href="https://github.com/J11an/COMP3901-Capstone-Speak-Ez-AAC" target="_blank">
        <img src="/images/github.png" alt="">
      </a>
      </Card>    
    </a>


    <a class="link" href="https://kieranator5050.github.io/tutorialsite-bootstrap/" target="_blank">
      <Card
      class="clickable"
      heading="TinDog"
      source-img="images/tindog.png"
      >
      <p>Simple bootstrap website built for responsiveness</p>
      <a class="btn" href="https://github.com/Kieranator5050/tutorialsite-bootstrap" target="_blank">
        <img src="/images/github.png" alt="">
      </a>
      </Card>
    </a>


    <a class="link" href="https://kieranator5050.github.io/emojipedia/" target="_blank">
      <Card
      class="clickable"
      heading="Emojipedia"
      source-img="images/emojipedia.png"
      >
      <p>Simple react website that uses an API to get emoji definitions</p>
      <a class="btn" href="https://github.com/Kieranator5050/emojipedia" target="_blank">
        <img src="/images/github.png" alt="">
      </a>
      </Card>
    </a>

    <a>
      <Card
      heading="GasVis"
      source-img="images/gasvis.png"
      >
      <p>Mobile application designed to provide gas prices within Jamaica</p>
      <p>Created used Flutter, FastAPI and Firebase</p>
      </Card>
    </a>


  </div>
</template>

<style lang="scss" scoped>
.card-group{
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
}
.clickable:hover{
  transform: scale(1.05);
  background-color: #1c293a;
}

.link{
  text-decoration: none;
}
</style>