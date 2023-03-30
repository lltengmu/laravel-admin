<template>
    <div class="w-full h-full">
        <p class="text-2xl font-bold mb-4">貸款管理模板</p>
        <el-card class="box-card w-full">
            <section class="md:grid grid-cols-2">
                <img src="/loanTemplate.jpg" class="rounded-md object-fit w-full" alt="贷款模板图片">
                <div class="px-20 flex flex-col justify-between">
                    <div>
                        <p class="p-2">文本區域</p>
                        <hr>
                        <el-tooltip placement="top" :disabled="showEditor">
                            <template #content>双击编辑文本</template>
                            <p class="p-2 cursor-pointer" @dblclick="handleShowEditor" v-html="content"></p>
                        </el-tooltip>
                    </div>
                    <global-button v-show="showEditor" class="w-28" text="保存" @click="handleSave" />
                </div>
            </section>
        </el-card>
        <el-card class="box-card w-full mt-4" :class="{ 'hidden': !showEditor }">
            <MarkdownEditor :height="250" v-model="content" />
        </el-card>
    </div>
</template>

<script setup lang="ts">
const showEditor = ref<boolean>(false);
const content = ref<string>("Citi特快現金讓您隨時擁有額外現金，還可享受低至1.38%°的實際年利率。（按此了解私人貸款產品資料概要）")
const handleShowEditor = () => showEditor.value = true;
const handleSave = () => showEditor.value = false;
</script>

<style lang="scss" scoped></style>