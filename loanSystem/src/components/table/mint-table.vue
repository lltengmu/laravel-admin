<template>
  <el-card class="box-card border-none" shadow="always">
    <template #header>
      <table-table-header />
    </template>
    <el-table 
      :max-height="628" ref="multipleTableRef" 
      :row-style="handleRowStyle"
      :header-row-style="handleHeaderRowStyle" 
      :highlight-current-row="true"
      :data="renderList"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="30px" />
      <el-table-column property="id" label="编号" width="60px" />
      <el-table-column property="firstName" label="名字" width="80px" />
      <el-table-column property="lastName" label="姓氏" width="80px" />
      <el-table-column property="loan_amount" label="贷款额度" width="80px" />
      <el-table-column property="company" label="贷款公司" width="150px" />
      <el-table-column property="disbursement_date" label="借款日期" width="140px" />
      <el-table-column property="repayment_period" label="还款日期" width="140px" />
      <el-table-column property="status" label="状态" width="300px">
        <template #default="{ row }">
          <global-status-button v-bind="{ caseId:row.id,...row.status }" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="auto">
        <template #default="{ row }">
          <el-row>
            <slot name="operation"></slot>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex justify-end mt-[10px]">
      <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
        @current-change="handleCurrentChange" />
    </div>
  </el-card>
</template>

<script setup lang="ts">
import MintTable from '@/components/table/mintTable';
import { loanApplication, status } from '@/store/caseStore';

const { data } = defineProps(['data', 'total'])
const {
  filterOptions,
  pageSize,
  pageSizes,
  currentPage,
  handleRowStyle,
  handleHeaderRowStyle,
  handleSelectionChange,
  handleCurrentChange,
  handlePageSizesChange,
} = MintTable

const renderList = computed(() => data.slice(pageSize.value * (currentPage.value - 1), pageSize.value * (currentPage.value)))

</script>

<style lang="scss">
.el-card__header {
  border-bottom: none;
}

.cell {
  min-height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>