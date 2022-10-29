<template>
    <header>
        <h1>{{title}}</h1>
        <Button @click="onClick()" text="Add new Task" color="green" />
    </header>
</template>

<script>
    import Button from "./Button.vue"

    export default {
        name: "Header", //nombre del componente
        components: {
            Button,
        },
        props: ["title"],
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