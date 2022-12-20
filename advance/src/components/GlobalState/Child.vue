<script>
    import AnotherComponent from './AnotherComponent.vue';

    export default {
    name: "Child",
    inject: ["message", "friends"],
    data() {
        return {
            // esto es válido porque los estados globales se inyectan antes de los estados propios del componente
            friends: this.friends
        };
    },
    components: { AnotherComponent }
}
</script>

<template>
    <AnotherComponent/>
</template>

<style scoped>

</style>