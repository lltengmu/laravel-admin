<template>
    <form>
        <section class="basiInformation">
            <div class="breakUpComponent">
                <h2 class="font-semibold">基本個人資料</h2>
            </div>
            <div class="inputWrapper flex justify-start items-center flex-wrap">
                <div class="mt-2 flex-auto p-1 flex flex-col">
                    <label for="" class="text-sm">姓氏<sup class="text-red-500">*</sup>:</label>
                    <el-input class="mt-1" name="first_name" size="large" placeholder="请输入姓氏" />
                </div>
                <div class="mt-2 flex-auto p-1 flex flex-col">
                    <label for="" class="text-sm">名字<sup class="text-red-500">*</sup>:</label>
                    <el-input class="mt-1" name="last_name" size="large" placeholder="请输入姓氏" />
                </div>
                <div class="mt-2 flex-auto p-1 flex flex-col">
                    <label for="" class="text-sm">稱謂<sup class="text-red-500">*</sup>:</label>
                    <el-select class="m-2" placeholder="Select">
                        <el-option v-for="item in appellationOptions" :key="item.id" :label="item.name" :value="item.id" />
                    </el-select>
                </div>
                <div class="mt-2 flex-auto p-1 flex flex-col">
                    <label for="" class="text-sm">名字<sup class="text-red-500">*</sup>:</label>
                    <el-input class="mt-1" name="last_name" size="large" placeholder="请输入姓氏" />
                </div>
            </div>
        </section>
    </form>
</template>

<script setup lang="ts">
const appellationOptions = [
    { id: 1, name: '小姐', },
    { id: 2, name: '女士' },
    { id: 3, name: '先生' },
    { id: 4, name: '太太' }
]
</script>

<style scoped></style>