<template>
    <section class="w-full flex justify-end py-12 text-right items-center">
        <p class="inline-block">{{ labelText }}</p>
        <button class="ml-4 inline-block w-32 h-10 rounded-full" type="button">Get started</button>
    </section>
</template>

<script setup lang="ts">
const { labelText } = defineProps({
    labelText:String
})
</script>

<style lang="scss" scoped>
section {
    color: #6A74A5;

    button {
        border: 1px solid #4458FE;
        color: #4458FE;
        &:active {
            border: none;
            color: white;
            background-image: linear-gradient(to right top, #4f8aff, #4980ff, #4676ff, #476aff, #4b5eff);
            ;
        }
    }
}</style>