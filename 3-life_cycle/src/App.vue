<template>
  <!-- <LifeCycle /> -->
  <!-- <Watch/> -->
  <MoreAboutComponents/>
</template>

<script>
  import LifeCycle from './components/LifeCycle.vue';
  import Watch from './components/Watch.vue';
  import MoreAboutComponents from './components/MoreAboutComponents.vue';
  
  export default {
    name: 'App',
    components: {
      LifeCycle,
      Watch,
      MoreAboutComponents
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
