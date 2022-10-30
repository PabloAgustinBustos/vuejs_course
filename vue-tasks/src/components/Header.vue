<template>
    <header>
        <h1>Task Tracker</h1>
        <Button 
            @click="$emit('toggleForm')" 
            :text="showForm ? 'close form' : 'add new task'" 
            :color="showForm ? 'red' : 'green'" 
        />
    </header>
</template>

<script>
    import Button from "./Button.vue"

    export default {
        name: "Header", //nombre del componente
        components: {
            Button,
        },
        props: ["title", "buttonText", "showForm"],
        methods: {
            onClick(){
                console.log("click")
            }
        }
    }
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>