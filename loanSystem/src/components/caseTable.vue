<template>
    <el-card class="box-card border-none" shadow="always">
        <template #header>
            header
        </template>
        <el-table ref="multipleTableRef" :row-style="handleRowStyle" :header-row-style="handleHeaderRowStyle" :highlight-current-row="true" height="680px"
            :data="data" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="30px" />
            <el-table-column property="id" label="编号" width="60px" />
            <el-table-column property="firstName" label="名字" width="80px" />
            <el-table-column property="lastName" label="姓氏" width="80px" />
            <el-table-column property="loan_amount" label="贷款额度" width="80px" />
            <el-table-column property="company" label="贷款公司" />
            <el-table-column property="disbursement_date" label="借款日期" />
            <el-table-column property="repayment_period" label="还款日期" />
            <el-table-column label="状态">
                <template #default="{ row }">
                    <global-operate-button :label-text="row.status" :type="row.type" />
                </template>
            </el-table-column>
            <el-table-column property="operate" label="操作">
                <template #default="{ row }">
                    <global-operate-button :label-text="row.status" />
                </template>
            </el-table-column>
        </el-table>
        <div class="flex justify-end mt-[10px]">
            <el-pagination background layout="prev, pager, next" :total="50" />
        </div>
    </el-card>
</template>

<script setup lang="ts">
import useCaseStore,{ Cases } from '@/store/caseStore'
import { ElTable, ColumnStyle } from 'element-plus'

const data = useCaseStore().renderList;
//获取数据
useCaseStore().initDataTable();
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<Cases[]>([])
const toggleSelection = (rows?: Cases[]) => {
    if (rows) {
        rows.forEach((row) => {
            // TODO: improvement typing when refactor table
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            multipleTableRef.value!.toggleRowSelection(row, undefined)
        })
    } else {
        multipleTableRef.value!.clearSelection()
    }
}
const handleSelectionChange = (val: Cases[]) => {
    multipleSelection.value = val
}
const handleRowStyle = (): ColumnStyle<any> => {
    return { textAlign: "left", padding:'10px',fontSize:'14px',color:"#3A3F63" ,cursor:"pointer",zIndex:99}
}
const handleHeaderRowStyle = (): ColumnStyle<any> => {
    return { textAlign: "left",color:"#3A3F63" }
}
</script>

<style lang="scss">
.el-card__header{
    border-bottom: none;
}
.cell{
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>