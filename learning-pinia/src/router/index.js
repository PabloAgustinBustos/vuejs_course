import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/main.vue")
    },
    // {
    //     path: "/logout",
    //     name: "home",
    //     component: () => import("../views/main.vue")
    // },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})