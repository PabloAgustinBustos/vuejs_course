<template>
    <section>
        <h1>Jobs</h1>

        <div
            v-for="job in jobs"
            :key="job.id"
        >
            <!-- <router-link :to="{name: 'JobDetails', params: {id: job.id}}"> -->
            <router-link :to="`jobs/${job.id}?title=${job.title}`">
                <h2>{{job.title}}</h2>
            </router-link>
        </div>
    </section>
</template>

<script>
    export default{
        data(){
            return {
                jobs: [
                    {title: "UX Designer", id: 1, details: "lorem"},
                    {title: "Javascript Dev", id: 2, details: "lorem"},
                    {title: "FrontEnd Dev", id: 3, details: "lorem"},
                ]
            }
        },

        props: ["id"]
    }
</script>