import { RouteRecordRaw } from "vue-router";

export default {
    name: 'roleManager',
    path: '/roleManager',
    component: () => import('@/layouts/admin.vue'),
    meta: { auth: true,menu: { title: "角色管理", icon: "fas fa-home",group:true } },
    children: [
        {
            name:'roleManager.serviceProviderManagement',
            path:'serviceProviderManagement',
            meta: { menu: { title: "服务提供商管理",icon:"fab fa-bimobject"} },
            component:() => import('@/views/admin/serviceProviderManagement.vue')
        },
        {
            name:'roleManager.userManagement',
            path:'userManagement',
            meta: { menu: { title: "用户管理",icon:"fab fa-bilibili"} },
            component:() => import('@/views/admin/userManagement.vue')
        },
        {
            name:'roleManager.clientsManagement',
            path:'clientsManagement',
            meta: { menu: { title: "客户管理",icon:'fab fa-blogger'} },
            component:() => import('@/views/admin/clientsManagement.vue')
        },
    ]
} as RouteRecordRaw