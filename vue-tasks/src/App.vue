<template>
  <div class="container">
    <Header :showForm="showForm" @toggleForm="toggleForm"/>
    
    <AddForm v-if="showForm" @create="handleSubmit"/>

    <Tasks 
      @delete-task="deleteTask" 
      @toggle="toggle"
      :tasks="tasks" 
      />
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  import Tasks from "./components/Tasks.vue"
  import AddForm from "./components/AddForm.vue"

  export default {
    name: 'App',
    components: {
      Header,
      Tasks,
      AddForm
    },
    
    data(){
      return{
        tasks: [],
        showForm: false
      }
    },

    methods: {
      deleteTask(id){
        this.tasks = this.tasks.filter(t => t.id != id)
      },

      toggle(id){
        this.tasks = this.tasks.map(t => {
          if(t.id == id){
            return {
              ...t,
              reminder: !t.reminder
            }
          }else{
            return t
          }
        })
      },

      toggleForm(){
        this.showForm = !this.showForm
      },

      handleSubmit(newTask){
        newTask.id = this.tasks.length + 1
        this.tasks.push(newTask)

        console.log(this.tasks)
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>