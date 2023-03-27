<template>
    <div class="mt-2 flex-auto p-1 flex flex-col">
        <label for="" class="text-sm">{{ props.title }}<sup class="text-red-500">*</sup>:</label>
        <el-input v-if="props.isInput" :value="value" @update:value="$event.target.value" class="mt-1" size="large" :placeholder="props.placeholder" />
        <el-select v-else size="large" >
            <el-option
                v-for="(option,key) in props.options"
                :key="key"
                :label="option.name"
                :value="key + 1"
            />
        </el-select>
    </div>
</template>

<script setup lang="ts">
interface options {
    id:number
    name:string
}
interface Props {
    id: number;
    title: string;
    name: string;
    icon: string;
    isInput: boolean;
    placeholder?: string;
    value: string|number;
    options?:options[]
}
const value = defineProps(['value'])
const emit = defineEmits(['updated:value'])
</script>

<style scoped>

</style>