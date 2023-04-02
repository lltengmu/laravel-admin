<template>
    <button v-if="!props.isComponent" :class="props.label_en">
            <span>{{ props.label_tc }}</span>
            <span v-if="props.isComponent" class="fas fa-angle-down ml-1 mt-1 text-gray-500"></span>
    </button>
    <el-dropdown v-else trigger="click" :disabled="props.label_tc=='申請失敗' ? true : false">
        <button :class="props.label_en">
            <span>{{ props.label_tc }}</span>
            <span class="fas fa-angle-down ml-1 mt-1 text-gray-500"></span>
        </button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in options" @click="caseService.updateCaseStatus({ caseId:props.caseId,...item })">{{ item.label_tc }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import caseStore from '@/store/caseStore';

const caseService = caseStore();
interface Props {
    id:number,
    caseId:number
    label_tc:string,
    label_en:string
    isComponent:boolean
}
const props = defineProps<Props>()

const options = [
    { id:1,label_en:'submitted',label_tc:'提交' },
    { id:2,label_en:'pass_to_sp',label_tc:'轉交到服務提供者' },
    { id:5,label_en:'fail',label_tc:'申請失敗' },
]
</script>

<style lang="scss" scoped>
button {
    padding: 0 10px;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 30px;
    box-shadow: 4px 4px 12px rgba(179, 192, 231, 0.3);
    transition: .3s ease;

    &:hover {
        background: rgba(179, 192, 231, 0.3);
    }
}
</style>