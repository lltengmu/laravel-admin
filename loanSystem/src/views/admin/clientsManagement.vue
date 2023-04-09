<template>
    <div class="grid md:grid-rows-[auto_1fr]">
        <div class="flex justify-between items-center mb-4">
            <p class="text-2xl font-bold">clients</p>
            <section>
                <global-export-button />
                <global-save-button class="ml-2" />
            </section>
        </div>
        <div>
            <global-custom-table :data="clientsManagement.clientTableData()">
                <template #operation="{ id }">
                    <el-button plain round color="#4B5EFF">匯出xlsx</el-button>
                    <el-button plain round color="#4B5EFF">文件查看</el-button>
                    <el-button plain round color="#4B5EFF" @click="clientsManagement.handleInspect(id)">查看</el-button>
                    <el-button plain round type="danger" @click="clientsManagement.handleDelete">刪除</el-button>
                </template>
            </global-custom-table>
            <el-drawer v-model="clientsManagement.drawer.value" :with-header="false">
                <form>
                    <section class="basiInformation" v-for="(item, index) in clientsManagement.clientsInformationWithValue()" :key="index">
                        <div class="breakUpComponent">
                            <h2 class="font-semibold">{{ item.title }}:</h2>
                        </div>
                        <div class="inputWrapper flex justify-start items-center flex-wrap">
                            <div class="mt-2 flex-auto p-1 flex flex-col" v-for="(el,index) in item.elements" :key="index">
                                <label for="" class="text-sm">{{ el.title }}<sup class="text-red-500">*</sup>:</label>
                                <el-input v-if="el.isInput" class="mt-1" size="large" v-model="el.value" :placeholder="el.placeholder" />
                                <el-select v-else size="large" v-model="el.value" :placeholder="el.placeholder">
                                    <el-option v-for="(option, key) in el.options" :key="key" :label="option.name" :value="key + 1" />
                                </el-select>
                            </div>
                        </div>
                    </section>
                </form>
            </el-drawer>
        </div>
    </div>
</template>

<script lang="ts" setup>
import clientsManagement from '@/composables/clientsManagement';
</script>