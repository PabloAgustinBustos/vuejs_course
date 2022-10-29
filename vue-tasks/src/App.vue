<template>
  <div class="container">
    <Header title="task tracker" />
    <Tasks :tasks="tasks" />
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  import Tasks from "./components/Tasks.vue"

  export default {
    name: 'App',
    components: {
      Header,
      Tasks
    },
    
    data(){
      return{
        tasks: []
      }
    },

    created(){
      this.tasks = [
        {
          id: 1,
          text: "Doctors Appointment",
          day: "March 1st at 2:30pm",
          reminder: true
        },

        {
          id: 2,
          text: "Meeting at School",
          day: "March 3rd at 1:30pm",
          reminder: true
        },

        {
          id: 3,
          text: "Food Shooping",
          day: "March 3rd at 11:00am",
          reminder: false
        }
      ]
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

.btn{
  display: inline-block;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>
