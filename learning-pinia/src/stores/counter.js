import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        count: 0
    }),

    getters: {
        getDigits(state){
            return state.count.toString().length
        }
    },

    actions: {
        increment(){
            this.count++
        },

        decrement(){
            this.count--
        }
    }
})