<template>
    <div class="admin h-screen w-screen grid md:grid-rows-[auto_1fr]">
        <AdminHeader />
        <div class="grid md:grid-cols-[auto_1fr]">
            <MenuComponent />
            <div class="conten text-primary bg-primary">
                <div class="relative h-full w-full overflow-x-hidden overflow-y-scroll bg-primary">
                    <router-view #default="{ Component }" mode="out-in">
                        <Transition appear class="animate__animated" :enter-active-class="route.meta.enterClass?? 'animate__fadeInRight'" :leave-active-class="route.meta.leaveClass??'animate__fadeOutLeft'">
                            <component :is="Component" class="absolute w-full p-4" />
                        </Transition>
                    </router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MenuComponent from './admin/menu.vue'
import navbar from './admin/navbar.vue'
import Historylink from './admin/historylink.vue';
import menuService from '@/composables/menu'
import AdminHeader from './admin/adminHeader.vue';
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import useCaseStore from '@/store/caseStore';
//获取数据
await useCaseStore().initDataTable();
//获取当前路由
const route = useRoute();
//检测路由变化
watch(route,() => {
    //监听路由变化，添加历史菜单
    menuService.addHistoryMenu(route)
},{ immediate:true })
</script>

<style lang="scss" scoped>
.animate__fadeInRight{
    animation-duration: 0.5s;
}
.animate__fadeOutLeft{
    animation-duration: 0.5s;
}
</style>