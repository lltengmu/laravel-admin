<script setup lang="ts">
</script>

<template>
    <suspense>
        <router-view />
        <template #fallback>
            <div class="w-screen h-screen z-50 bg-gray-700">loading...</div>
        </template>
    </suspense>
</template>

<style scoped>

</style>
