<script setup>
    import {reactive, ref} from "vue"
    
    // para cualquier tipo de dato
    const count = ref(0)

    const object = {
        num: ref(0)
    }

    function incrementRef(){
        count.value++
    }

    function incrementObject(){
        let {num} = object

        num.value++
    }
</script>

<template>
    <!-- los refs no necesitan el .value en el template. Esto se llama Unwrapping -->
    <button @click="incrementRef">{{count}}</button>
    <button @click="incrementObject">{{(object.num + 1)}}</button>
    
</template>