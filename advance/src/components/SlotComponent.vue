<script>
    export default {
        name: "SlotComponent",
        data(){
            return{
                name: "Juan"
            }
        }
    }
</script>

<template>
    <section>
        <h1>Esto es un slot</h1>

        <slot :value="name">valor por defecto</slot>
    </section>
</template>