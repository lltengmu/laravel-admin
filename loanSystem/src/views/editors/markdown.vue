<template>
    <div>
        <Editor v-model="content" :height="300" placeHolder="请输入markdown内容" />
    </div>
</template>

<script setup lang="ts">
import Editor from "@/components/markdown/editor.vue"
import { ref } from "vue";

const content = ref('abc')
</script>

<style scoped>

</style>