<template>
    <div class="grid md:grid-rows-[auto_1fr]">
        <div class="flex justify-between items-center mb-4">
            <p class="text-2xl font-bold">CASE</p>
            <section>
                <global-export-button />
                <global-save-button class="ml-2" />
            </section>
        </div>
        <div>
            <case-table />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss"></style>