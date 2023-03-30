<template>
    <div id="MarkdownEditor"></div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
import toastEditor from './toastEditor';

interface IProps {
    modelValue?: string
    height?: number
    placeHolder?: string
}
const props = withDefaults(defineProps<IProps>(), {
    modelValue: '',
    height: 500,
    placeHolder: ''
});

const emit = defineEmits(['update:modelValue'])
nextTick(() => {
    const toastUi = new toastEditor('#MarkdownEditor', `${props.modelValue}`, `${props.height}px`);
    toastUi.editor.on('change', (type: string) => {
        emit('update:modelValue', toastUi.editor['getHTML']())
    })
})
</script>

<style lang="scss">
@import 'https://uicdn.toast.com/editor/latest/toastui-editor.min.css';

#MarkdownEditor {
    @apply bg-white;

    .toastui-editor-mode-switch {
        display: none !important;
    }
    .fullscreen{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        z-index: 999;
    }
}
</style>