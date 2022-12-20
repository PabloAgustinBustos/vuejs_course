<script>
    import Parent from "../components/GlobalState/Parent.vue"

    export default {
        name: "GlobalState",

        components: {Parent},

        provide: {
            message: "Soy un estado global",
            friends: ["pablo", "franco"],
            title: "componentes globales",
        }
    }
</script>

<template>
    <Parent/>
</template>

<style scoped>

</style>