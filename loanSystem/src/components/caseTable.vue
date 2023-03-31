<template>
    <el-card class="box-card border-none" shadow="always">
        <template #header>
            <div class="flex items-center">
                <section class="h-[32px] rounded-full flex items-center p-2">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" class="outline-none ml-2 input-container" placeholder="Search your customer…">
                </section>
                <section>
                    <el-select class="m-2" placeholder="filter">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                </section>
            </div>
        </template>
        <el-table ref="multipleTableRef" :row-style="caseStore.handleRowStyle"
            :header-row-style="caseStore.handleHeaderRowStyle" :highlight-current-row="true"
            :data="caseStore.caseTableData" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="30px" />
            <el-table-column property="id" label="编号" width="60px" />
            <el-table-column property="firstName" label="名字" width="80px" />
            <el-table-column property="lastName" label="姓氏" width="80px" />
            <el-table-column property="loan_amount" label="贷款额度" width="80px" />
            <el-table-column property="company" label="贷款公司" width="150px" />
            <el-table-column property="disbursement_date" label="借款日期" width="140px" />
            <el-table-column property="repayment_period" label="还款日期" width="140px" />
            <el-table-column label="状态" width="300px">
                <template #default="{ row }">
                    <global-operate-button v-bind="{ caseId: row.id, ...row.caseStatus }" />
                </template>
            </el-table-column>
            <el-table-column label="操作" width="auto">
                <template #default="{ row }">
                    <el-row>
                        <el-button plain round color="#4B5EFF">匯出xlsx</el-button>
                        <el-button plain round color="#4B5EFF">文件查看</el-button>
                        <el-button plain round color="#4B5EFF">查看</el-button>
                        <el-button plain round type="danger">刪除</el-button>
                    </el-row>
                </template>
            </el-table-column>
        </el-table>
        <div class="flex justify-end mt-[10px]">
            <el-pagination background layout="prev, pager, next" :total="caseStore.casesList.length" @current-change="caseStore.handlePageChange" />
        </div>
    </el-card>
</template>

<script setup lang="ts">
import useCaseStore, { CasesTable } from '@/store/caseStore'
import { ElTable, ColumnStyle } from 'element-plus'

const caseStore = useCaseStore()
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<CasesTable[]>([])
const handleSelectionChange = (val: CasesTable[]) => multipleSelection.value = val
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style lang="scss">
.el-card__header {
    border-bottom: none;
}

.cell {
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>