<template>
    <div class="w-screen h-screen flex justify-center items-center flex-col">
        <div class="identifyCard w-2/4 h-40 mt-10 flex justify-start items-center cursor-pointer" v-for="(item,index) in identifes" :key="index" @click="handleToLogin(item.enName)">
            <div class="headSculpture ml-4" :style="`background-image: url(${item.image})`"></div>
            <p class="ml-4">
                <span class="font-bold text-lg">{{ item.identify }}</span>
                <span class="px-1">/</span>
                <span class="text-gray-400">{{ item.enName }}</span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import useIdentify from '@/composables/identify';
const identifes = useIdentify();
const router = useRouter();
const handleToLogin = (identify:string) => router.push(`${identify}/login`)
</script>

<style lang="scss" scoped>
.identifyCard{
    background: #ecf0f1;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 70px;
    &:hover{
        color: white;
        background: #bdc3c7;
    }
    .headSculpture{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 1px solid #3A3F63;
        background-size: cover;
    }
}
</style>