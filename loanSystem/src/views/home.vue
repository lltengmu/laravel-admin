<template>
    <div class="w-screen h-screen bg-gray-700 flex flex-col justify-center items-center">
        <img src="/images/App.jpg" alt="" class="w-52 h-52 object-cover rounded-full border-8 border-white">
        <div class="mt-4">
            <router-link :to="{ name:'admin.dashbord' }" class="hd-button">后台管理</router-link>
            <router-link v-if="!utils.user.isLogin()" :to="{ name:'auth.login' }" class="hd-button ml-3 bg-fuchsia-600">用户登录</router-link>
        </div>
        <div class="text-gray-300 text-xs font-mono drop-shadow-md mt-5">welcome to loanSystem!</div>
    </div>
</template>

<script setup lang="ts">
import utils from '@/utils';
</script>

<style scoped>

</style>