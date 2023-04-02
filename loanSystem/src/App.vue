<script setup lang="ts">
</script>

<template>
    <router-view v-slot="{ Component }">
        <Suspense>
            <component :is="Component" />
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </router-view>
</template>

<style scoped></style>
