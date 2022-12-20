<script setup>
    import { storeToRefs } from "pinia";
    import Counter from "../components/Counter.vue"
    import {useAuthStore} from "../stores/auth"

    // opción clásica
    const authStore = useAuthStore()

    // otra opción si queremos hacer destructuring
    const {isAuthenticated, user} = storeToRefs(authStore)
</script>

<template>
  <div>
    <button v-if="isAuthenticated" @click="authStore.logout">Logout</button>
    <button v-else @click="authStore.login">Login</button>

    <div v-if="authStore.isAuthenticated">
        Username is: {{authStore.fullName}}
    </div>
    <Counter/>
  </div>

  
</template>