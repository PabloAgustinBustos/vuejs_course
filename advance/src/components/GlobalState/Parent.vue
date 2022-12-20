<script>
    import Child from "./Child.vue"
    import {computed} from "vue"

    export default {
        name: "Parent",
        
        data(){
            return{
                text: "a"
            }
        },

        components: {Child},

        provide(){
            return{
                // para que sea reactivo lo hacemos un estado computed
                text: computed(() => this.text)
            }
        }
    }
</script>

<template>
    <Child/>
    {{text}}
</template>

<style scoped>

</style>