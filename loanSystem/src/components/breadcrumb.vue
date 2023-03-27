<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <template v-if="route">
            <el-breadcrumb-item :to="r.path" v-for="(r,index) in route.matched" :key="index">{{ r.meta.menu?.title }}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import menuService from '@/composables/menu';
const route = menuService.route.value;
</script>

<style scoped></style>