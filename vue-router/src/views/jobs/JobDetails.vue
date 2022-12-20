<template>
    <div>
        <h1>Job Details</h1>

        <p>the job is {{$route.params.id}}</p>
    </div>
</template>

<script>
    export default {
        name: "JobDetails",

        data(){
            return{
                id: this.$route.params.id
            }
        },

        beforeMount(){
            console.log(this.$route)
        }
    }
</script>