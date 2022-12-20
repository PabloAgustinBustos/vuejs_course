<script setup>
    import {reactive, ref, watch, watchEffect} from "vue"

    const textContent = ref("")
    const isTyping = ref(false)

    watchEffect((onInvalidate) => {
        let showTypingStatus = null
        console.log(textContent.value)
        
        if(textContent.value.length > 0){
            isTyping.value = true

            showTypingStatus = setTimeout(() => {
                isTyping.value = false
            }, 200)
            
        }
        
        onInvalidate(() => {
            clearInterval(showTypingStatus)
        })
    })
</script>

<template>
    <textarea v-model="textContent"/>
    <p v-if="isTyping">He is typing...</p>
</template>