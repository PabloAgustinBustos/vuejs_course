import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,

        user: {},

        skills: ["javascript", "react", "vue"]
    }),

    getters: {
        fullName(){
            return this.user.first_name + " " + this.user.last_name
        }
    },

    actions:{
        async login(){
            const res = await fetch("https://reqres.in/api/users/2")
            const {data} = await res.json()

            this.user = data
            this.isAuthenticated = true
        },

        logout(){
            this.isAuthenticated = false
            this.user = {}
        }
    }
})