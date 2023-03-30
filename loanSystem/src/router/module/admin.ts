import { RouteRecordRaw } from "vue-router";

export default {
    name: 'admin',
    path: '/admin',
    redirect: '/admin/home',
    component: () => import('@/layouts/admin.vue'),
    meta: { auth: true, menu: { title: "Dashbord", icon: "fas fa-home",group:false, } },
    children: [
        {
            name: 'admin.dashbord',
            path: 'dashbord',
            meta: { menu: { title: "dashbord" ,icon:"fab fa-artstation" } },
            component: () => import('@/views/admin/dashbord.vue')
        },
        {
            name:'admin.loanApplication',
            path:'loanApplication',
            meta: { menu: { title: "贷款申请",icon:'fab fa-cc-apple-pay' } },
            component:() => import('@/views/admin/loanApplication.vue')
        },
        {
            name:'admin.approvalManagement',
            path:'approvalManagement',
            meta: { menu: { title: "贷款审批" ,icon:"fab fa-buffer" } },
            component:() => import('@/views/admin/approvalManagement.vue')
        },
        {
            name:'admin.loanTemplateManagement',
            path:'loanTemplateManagement',
            meta: { menu: { title: "贷款模板管理",icon:'fab fa-centercode' } },
            component:() => import('@/views/admin/loanTemplateManagement.vue')
        },
        {
            name:'admin.report',
            path:'report',
            meta: { menu: { title: "报告",icon:"fab fa-cloudscale" } },
            component:() => import('@/views/admin/report.vue')
        }
    ]
} as RouteRecordRaw