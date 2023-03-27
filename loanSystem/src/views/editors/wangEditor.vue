<template>
        <div class>
                <wangeEditor v-model="content" />
                <div class="bg-gray-300 mt-3 border p-3">{{ content }}</div>
        </div>
</template>

<script setup lang="ts">
import wangeEditor from '@/components/wangEditor/editor.vue'
import { ref } from 'vue';
const content = ref(`<p>houdunren.com</p>`)
</script>

<style scoped></style>