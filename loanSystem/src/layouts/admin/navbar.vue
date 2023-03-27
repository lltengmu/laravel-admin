<template>
    <div class="bg-white p-3 px-5 flex justify-between items-center">
        <div class="flex items-center">
            <div @click="menuService.toggleState">
                <i class="fas fa-align-left mr-2 text-gray-700 cursor-pointer" v-if="menuService.close.value"></i>
                <i class="fas fa-align-justify mr-2 text-gray-700 cursor-pointer" v-else></i>
            </div>
            <Breadcrumb class="hidden md:block" />
        </div>
        <div class="flex justify-center items-center relative cursor-pointer">
            <Nofification class="mr-5" />
            <i class="fas fa-border-none mr-5" @click="fullScreen"></i>
            <div class="group relative">
                <div class="flex justify-center items-center">
                    <img :src="userStore.info?.avatar" class="w-8 h-8 rounded-full object-cover" alt="" />
                    <span class="ml-2 text-sm text-gray-600">{{ userStore.info?.name }}</span>
                </div>
                <section
                    class="group-hover:block absolute right-0 top-full bg-white shadow-sm px-3 whitespace-nowrap border rounded-md hidden z-[999]">
                    <div class="flex items-center cursor-pointer border-b py-3">
                        <a class="fas fa-ad"></a>
                        <span class="text-xs text-gray-600 ml-2">网站首页</span>
                    </div>
                    <div class="flex items-center cursor-pointer border-b py-3">
                        <a class="fas fa-house-user"></a>
                        <span class="text-xs text-gray-600 ml-2">网站首页</span>
                    </div>
                    <div class="flex items-center cursor-pointer py-3" @click="utils.user.logout()">
                        <a class="fas fa-sign-out-alt"></a>
                        <span class="text-xs text-gray-600 ml-2">退出登录</span>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import user from '@/store/userStore';
import utils from '@/utils';
import menuService from '@/composables/menu';
import Nofification from '@/components/notification.vue';
import Breadcrumb from '@/components/breadcrumb.vue';
const userStore = user();
//定义全屏按钮处理事件，调用 web Api 实现页面全屏展示
const fullScreen = () => document.documentElement.requestFullscreen();
</script>

<style scoped></style>