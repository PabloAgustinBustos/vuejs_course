<script setup>
import { computed, reactive } from '@vue/reactivity';

    const author = reactive({
        name: "Pablo",
        lastName: "Bustos"
    })

    const fullName = computed(() => author.name + " " + author.lastName)
</script>

<template>
    {{fullName}}
    
</template>