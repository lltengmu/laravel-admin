<template>
    <button :type="type" class="font-semibold border-none rounded-full text-white hd-button">{{ text }}</button>
</template>

<script setup lang="ts">
interface Props {
    text?:string
    type?:"button"|'submit'|'reset'
}
const { text,type } = withDefaults(defineProps<Props>(),{
    text:'按钮',
    type:"button"
})
</script>

<style lang="scss" scoped></style>