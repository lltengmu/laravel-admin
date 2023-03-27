<template>
    <div class="index grid md:grid-cols-[auto_1fr]">
        <global-banner />
        <main class="overflow-y-hidden min-w-[500px]">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.index{
    color: #3A3F63;
}
</style>