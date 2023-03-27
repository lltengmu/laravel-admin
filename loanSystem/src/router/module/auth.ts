import { RouteRecordRaw } from "vue-router";
//通过模块注册前台路由
export default {
    name:'auth',
    path: '/auth',
    meta: { guest:true },
    component: () => import('@/layouts/auth.vue'),
    children: [
        {
            name: 'auth.login',
            path: 'login',
            meta: { guest:true },
            component: () => import('@/views/auth/login.vue'),
        },
        {
            name: 'auth.newLoanApplication',
            path: 'new-loanApplication',
            meta: { guest:true },
            component: () => import('@/views/newLoanApplication.vue'),
        },
        {
            name: 'auth.register',
            path: 'register',
            meta: { guest:true },
            component: () => import('@/views/register.vue'),
        }
    ]
} as RouteRecordRaw