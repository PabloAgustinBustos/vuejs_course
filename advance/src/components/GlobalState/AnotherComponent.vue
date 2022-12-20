<script>
    export default {
        name: "AnotherComponent",
        
        inject:{
            // estado global con nombre custom
            content:{
                from: "title",
            },

            text: {
                from: "text",
            }
        },
    }
</script>

<template>
    <h1>{{text}}</h1>
</template>

<style scoped>

</style>