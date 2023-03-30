<template>
    <div>
        <div class="flex justify-between items-center mb-4">
            <p class="text-2xl font-bold">DASHBOARD</p>
            <global-export-button />
        </div>
        <div class="grid md:grid-cols-4 gap-3 bg-gray-100">
            <el-card shadow="hover" :body-style="{ height: '112px' }" v-for="(card, index) of cards" :key="index"
                class="cursor-pointer !border-none">
                <section class="flex justify-between items-center">
                    <span class="text-lg text-gray">{{ card.title }}</span>
                </section>
                <section class="mt-4 flex justify-between items-center">
                    <span class="text-2xl font-bold text-primary">{{ card.count }}</span>
                    <div>
                        <span class="mr-2">{{ card.rate }}%</span>
                        <i :class="card.icon"></i>
                    </div>
                </section>
            </el-card>
        </div>
        <div class="p-3 mt-5 grid md:grid-cols-2 gap-3">
            <el-card shadow="always" :body-style="{ padding: '20px' }">
                <template #header>
                    <div>
                        <span>用戶統計</span>
                    </div>
                </template>
                <div id="echart1" class="h-72 w-full"></div>
            </el-card>
            <el-card shadow="always" :body-style="{ padding: '20px' }">
                <template #header>
                    <div>
                        <span>销售额</span>
                    </div>
                </template>
                <div id="echart2" class="h-72 w-full"></div>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { echart1, echart2,echart3 } from './echart'
import *  as echarts from 'echarts'
interface Icard {
    title: string,
    count: number,
    icon: string,
    rate:number,
    iconColor: string,
    totalTitle: string,
    total: number,
}
const cards = ref<Icard[]>([
    { title: "Case", count: 65145, iconColor: "text-violet-500", icon: "fas fa-arrow-up",rate:17, totalTitle: '总人数', total: 15614 },
    { title: "Person", count: 98451, iconColor: "text-green-500", icon: "fas fa-arrow-down",rate:24, totalTitle: '总销售额', total: 16515 },
    { title: "ServiceProvider(Active)", count: 15562, iconColor: "text-blue-500", icon: "fas fa-arrow-up",rate:23, totalTitle: '总订单数', total: 916141 },
    { title: "Success case/reject case", count: 26261, iconColor: "text-red-500", icon: "fas fa-arrow-down",rate:36, totalTitle: '总评论数', total: 489456 },
])
nextTick(() => {
    echarts.init(document.getElementById('echart1') as HTMLDivElement).setOption(echart1);
    echarts.init(document.getElementById('echart2') as HTMLDivElement).setOption(echart2 as any);
})

</script>

<style scoped></style>