<template>
    <aside :class="`${isExpanded && 'isExpanded'}`">
        <div class="logo">
            <img class="img" src="../assets/vue.svg" alt="vue"/>
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle">
                <img src="../assets/flecha.svg" alt="icon" @click="toggleMenu"/>
            </button>
        </div>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar",

        data(){
            return{
                isExpanded: false
            }
        },

        methods: {
            toggleMenu(){
                this.isExpanded = !this.isExpanded
            }
        }
    }
</script>

<style lang="scss" scoped>
    aside{
        width: calc(2rem + 32px);
        min-height: 100vh;
        padding: 1rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background-color: var(--dark);
        color: var(--light);

        transition: .2s ease-out;

        .logo{
            margin-bottom: 1rem;

            .img{
                width: 2rem;
            }
        }

        .menu-toggle-wrap{
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;
            position: relative;
            top: 0;
            transition: .2s ease-out;

            .menu-toggle{
                transition: .2s ease-out;
                .material-icons{
                    font-size: 2rem;
                    color: var(--light);
                }
            }
        }

        &.isExpanded{
            width: var(--sidebar-width);

            .menu-toggle-wrap{
                top: -3rem;
            }
        }

        @media (max-width: 768px){
            position: fixed;
            z-index: 99;
        }
    }
</style>