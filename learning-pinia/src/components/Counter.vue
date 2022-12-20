<script setup>
    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '../stores/auth';
    import { useCounterStore } from '../stores/counter';
    
    const counter = useCounterStore()
    // const auth = useAuthStore()
    const {isAuthenticated} = storeToRefs(useAuthStore())
    
</script>

<template>
    <div>
        <button :disabled="!isAuthenticated" @click="counter.decrement">-</button>
        <p>Count value: {{counter.count}}</p>
        <button :disabled="!isAuthenticated" @click="counter.increment">+</button>

        <p>digits: {{counter.getDigits}}</p>
    </div>
</template>