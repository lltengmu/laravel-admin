<template>
    <div class="animate-list">
        <transition-group appear :tag="props.tag" name="list" @before-enter="onBeforeEnter" @enter="enter">
            <slot />
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import gasp from "gsap"
import { RendererElement } from "vue";
interface Props {
    tag?:string
    duration?:number
    delay?:number
}
const props = withDefaults(defineProps<Props>(),{
    tag:'ul',
    duration:.5,
    delay:.2
})
//动画函数
const onBeforeEnter = (el: RendererElement) => {
    gasp.set(el, {
        opacity: 0
    })
}
const enter = (el: RendererElement) => {
    gasp.to(el, {
        opacity: 1,
        duration: props.duration,
        delay: el.dataset.index * props.delay
    })
}
</script>


<style lang="scss" scoped>
.animate-list {
    position: relative;

    .list-leave-active {
        position: absolute;
        width: 100%;
        transition: all 0.5s ease;
    }

    .list-leave-to {
        opacity: 0;
    }

    .list-move {
        transition: all 1s ease;
    }
}
</style>