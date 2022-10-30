<template>
    <section>
        <Task 
            v-for="task in tasks" 
            :key="task.id" 
            @delete-task="$emit('delete-task', task.id)" 
            @click="$emit('toggle', task.id)"
            :task="task" 
        />
    </section>
</template>

<script>
    import Task from "./Task.vue"

    export default {
        name: "Tasks",
        props: {
            tasks: Array
        },
        
        components: {
            Task
        },

        emits: ["delete-task", "toggle"]
    }
</script>