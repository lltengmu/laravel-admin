<template>
    <div class="border">
        <Toolbar class="border-b" :editor="wangEditor" :defaultConfig="toolbarconfig" mode="default" />
        <Editor 
        :style="style" 
        v-model="content" 
        :defaultConfig="wangEditorConfig" 
        mode="default" 
        @onCreated="handleCreated"
        @onChange="handleChange"
         />
    </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css'
//import { onBeforeUnmount, ref, shallowRef, onMounted,reactive } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ApiEnum } from '@/enum/ApiEnum';


interface IProps {
    modelValue?: string
}
const props = withDefaults(defineProps<IProps>(), {
    modelValue: '',
});
const emit = defineEmits(['update:modelValue'])
const style = reactive({ height:`300px`,overflowY:"hidden" })
//编辑器实例，必须使用 shallowRef
const wangEditor = shallowRef();
//内容HTML
const content = ref(props.modelValue)

const toolbarconfig = {}
const wangEditorConfig = {
    MENU_CONF:{
        uploadImage:{
            server: ApiEnum.UPLOAD_IMAGES_URL,
        }
    }
}

const handleChange = (editor:any) => {
    emit('update:modelValue',content.value)
}
//组件销毁时也及时销毁编辑器
onBeforeUnmount(() =>{
    const editor = wangEditor.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor:any) => {
    wangEditor.value = editor
}
</script>

<style scoped></style>