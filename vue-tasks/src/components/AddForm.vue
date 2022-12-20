<template>
    <form @submit.prevent="handleSubmit" class="add-form">
        <div class="form-control">
            <label>Task</label>
            <input v-model="text" type="text" name="text" placeholder="add task"/>
        </div>

        <div class="form-control">
            <label for="Day & time">day & time</label>
            <input v-model="day" type="text" name="day" placeholder="add day & time"/>
        </div>

        <div class="form-control form-control-check">
            <label>set reminder</label>
            <input v-model="reminder" type="checkbox" name="reminder"/>
        </div>
        
        <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
</template>

<script>
    export default {
        name: "AddForm",
        
        data(){
            return {
                text: "",
                day: "",
                reminder: false
            }
        },

        methods: {
            handleSubmit(){
                if(!this.text){
                    alert("please provide a task")
                    
                    return
                }

                const newTask = {
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder
                }

                this.text = ""
                this.day = ""
                this.reminder = false

                this.$emit("create", newTask)
            }
        }
    }
</script>

























































<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>