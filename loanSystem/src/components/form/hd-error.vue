<template>
    <div class="hd-error">{{ props.error }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
    error:String
})
</script>

<style lang="scss" scoped>
.hd-error{
    @apply rounded-sm bg-white text-red-500 text-sm px-2 py-1
}
</style>