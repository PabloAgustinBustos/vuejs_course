<template>
    <form>
        <input v-model="name" type="text" placeholder="escribir algo"/>
        <br/>
        {{name}}
    </form>
</template>

<script>
    export default{
        data(){
            return {
                name: ""
            }
        },

        watch: {
            name(current, prev){
                console.log("prev:",prev)
                console.log("current:",current)
            }
        }
    }
</script>



