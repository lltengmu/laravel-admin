<template>
    <div>
        <div class="flex justify-between items-center mb-4">
            <p class="text-2xl font-bold">CASE</p>
            <section>
                <global-export-button />
                <global-save-button class="ml-2" />
            </section>
        </div>
        <table-mint-table :data="cases.approvalManagement" :total="cases.approvalManagement.length">
            <template #operation>
                <el-button plain round color="#4B5EFF">申請資料</el-button>
                <el-button plain round type="danger">刪除</el-button>
            </template>
        </table-mint-table>
    </div>
</template>

<script setup lang="ts">
import caseStore from '@/store/caseStore';
const cases = caseStore();
</script>

<style lang="scss"></style>