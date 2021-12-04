import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/layouts/MainLayout.vue"),
        children: [
            {
                path: "",
                name: 'Home',
                component: () => import("@/pages/Home.vue"),
                meta: { requiresAuth: false },
            },
            {
                path: "/about",
                name: "About",
                component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue'),
                meta: { requiresAuth: false },
            },
        ]
    }
]