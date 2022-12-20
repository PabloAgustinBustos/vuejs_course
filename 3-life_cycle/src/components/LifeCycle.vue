<template>
    <article>
        <div v-for="pokemon in pokemons" :key="pokemon.name">
            <a :href="pokemon.url">{{pokemon.name}}</a>
        </div>
    </article>
</template>

<script>
    export default {
        name: "LifeCycle",

        data(){
            return {
                pokemons: []
            }
        },

        async beforeMount(){
            const res = await fetch("https://pokeapi.co/api/v2/pokemon")
            const data = await res.json()

            this.pokemons = [...data.results]
        }
    }
</script>
