<template>
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

<script setup lang="ts">
import MintTable from '@/components/table/mintTable';
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
</script>

<style scoped></style>