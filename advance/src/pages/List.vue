<script setup>
import { ref } from 'vue';

    const items = ref([
        {message: "Foo"},
        {message: "Bar"}
    ])
</script>

<template>
    <li v-for="item in items">
        {{item.message}}
    </li>
</template>