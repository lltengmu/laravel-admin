<template>
    <button :class="props.type">{{ props.labelText }}</button>
</template>

<script setup lang="ts">
interface Props {
    labelText:string
    type:"submitted"|"pass_to_sp"|"approved_by_sp"|"success"|"fail"
}
const props = withDefaults(defineProps<Props>(),{
    labelText:'',
    type:"submitted"
})
</script>

<style lang="scss" scoped>
button{
    padding: 0 10px;
    height: 30px;
    border-radius: 30px;
    box-shadow: 0px 4px 12px rgba(179, 192, 231, 0.3);
    transition: .3s ease;
    &:hover{
        background: rgba(179, 192, 231, 0.3);
    }
    &.success{
        color: #00D0B5;
    }
    &.fail{
        color: #FF2855;
    }
    &.pass_to_sp{
        color: #FFB243;
    }
    &.approved_by_sp{
        color: #8e44ad;
    }
    &.submitted{
        color: #858EBD;
    }
}
</style>