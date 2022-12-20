<script>
  import Children from "./components/Children.vue"
  import SlotComponent from "./components/SlotComponent.vue"
  import GlobalState from "./pages/GlobalState.vue"
  import Composition from "./pages/Composition.vue"
import ComputedProp from "./pages/ComputedProp.vue"
import List from "./pages/List.vue"
import Watch from "./pages/Watch.vue"

  export default {
    name: "App",
    data(){
      return {
        searchText: "",
        name: "pablo"
      }
    },
    components:{
    Children,
    SlotComponent,
    GlobalState,
    Composition,
    ComputedProp,
    List,
    Watch
}
  }
</script>
  
<template>
  <!-- <Children class="container"/> -->
  <!-- {{name}}
  <SlotComponent v-slot="slot">{{name}} {{slot.value}}</SlotComponent> -->
  <!-- <GlobalState/> -->
  <!-- <Composition/> -->
  <!-- <ComputedProp/> -->
  <!-- <List/> -->
  <Watch/>
</template>

<style scoped>
.flex{
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
