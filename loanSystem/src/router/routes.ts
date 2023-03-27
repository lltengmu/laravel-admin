import { RouteRecordRaw } from 'vue-router'

const routes = [
    {
        path:'/',
        component:() => import("@/views/home.vue")
    },
    {
        path: '/article',
        name:'article',
        meta:{ guest:true },
        component: () => import('@/views/article.vue'),
    },
    {
        path: '/:any(.*)',
        name:'notFound',
        component: () => import('@/views/errors/404.vue'),
    }
] as RouteRecordRaw[]
export default routes