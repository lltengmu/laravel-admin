<template>
    <el-card class="min-w-[1250px]">
        <template #header>
            <div class="flex items-center justify-between text-primary">
                <div class="flex items-center">
                    <section class="h-[32px] rounded-full flex items-center p-2">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" class="outline-none ml-2 font-bold" placeholder="Search your customer…">
                    </section>
                    <section>
                        <el-select class="m-2" placeholder="filter">
                            <el-option v-for="item in filterOptions" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                    </section>
                </div>
                <section class="float-right">
                    <el-dropdown trigger="hover">
                        <button class="m-2 outline-none border px-1 py-1 rounded-md">
                            <span class="text-base font-bold">{{ pageSize }}</span>
                            <span class="mx-2">/</span>
                            <span>page</span>
                            <i class="fas fa-caret-down ml-1"></i>
                        </button>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item v-for="item in pageSizes" @click="handlePageSizesChange(item.value)">
                                    {{ item.value }}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </section>
            </div>
        </template>
        <template #default>
            <table class="text-primary">
                <thead>
                    <tr>
                        <th></th>
                        <th>編號</th>
                        <th>头像</th>
                        <th>姓名</th>
                        <th>名字</th>
                        <th>電郵</th>
                        <th>電話</th>
                        <th>國籍</th>
                        <th>狀態</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody class="scrollElement">
                    <tr v-for="item in renderList" :key="item.id">
                        <td>
                            <input type="radio">
                        </td>
                        <td>{{ item.id }}</td>
                        <td>
                            <el-avatar shape="square" :size="30" src="/images/App.jpg" />
                        </td>
                        <td>{{ item.first_name }}</td>
                        <td>{{ item.last_name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.mobile }}</td>
                        <td>{{ item.nationality }}</td>
                        <td>
                            <el-switch v-model="item.status" inline-prompt :active-icon="Check" :inactive-icon="Close" />
                        </td>
                        <td>
                            <el-button plain round color="#4B5EFF">匯出xlsx</el-button>
                            <el-button plain round color="#4B5EFF">文件查看</el-button>
                            <el-button plain round color="#4B5EFF">查看</el-button>
                            <el-button plain round type="danger">刪除</el-button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <el-pagination class="float-right" layout="prev, pager, next" :total="data.length" :page-size="pageSize" @current-change="handleCurrentChange" />
                </tfoot>
            </table>
        </template>
    </el-card>
</template>

<script setup lang="ts">
import customTable from '@/composables/customTable';
import { Check, Close } from '@element-plus/icons-vue'
const value2 = ref(true)
const { data } = defineProps(['data']);
const { pageSize,currentPage,filterOptions,pageSizes,handlePageSizesChange,handleCurrentChange } = customTable
const renderList = computed(() => data.slice(pageSize.value * (currentPage.value - 1), pageSize.value * (currentPage.value)))
</script>

<style scoped lang="scss">
table {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 2.5rem 1fr;
    grid-template-columns: 1;

    thead {
        padding: 0.5rem;

        tr {
            display: grid;
            grid-template-rows: 100%;
            grid-template-columns: 3rem 3rem 5rem 5rem 5rem 1.5fr 1fr 1fr 1fr 2fr;
            text-align: left;
        }
    }

    tbody {
        padding: 0.5rem;
        max-height: 620px;
        overflow-y: scroll;
        tr {
            padding: 0.85rem;
            display: grid;
            grid-template-rows: 100%;
            grid-template-columns: 3rem 3rem 5rem 5rem 5rem 1.5fr 1fr 1fr 1fr 2fr;
            text-align: left;
            font-size: small;
            td{
                display: flex;
                align-items: center;
            }
        }
    }
    tfoot{
        padding: 0.5rem;
    }
}
</style>