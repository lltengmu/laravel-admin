<template>
    <div class="notification">
        <i class="fas fa-align-justify" @click.stop="show=!show"></i>
        <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
            <el-tab-pane label="系统通知" name="site">
                <a>
                    2006年，参演电视剧《与青春有关的日子》，开始在影视圈崭露头角 [1] [69] 。2005年，拍摄古装剧《锦衣卫》。2007年，主演赵宝刚导演的青春剧《奋斗》
                </a>
                <a>
                    2006年，参演电视剧《与青春有关的日子》，开始在影视圈崭露头角 [1] [69] 。2005年，拍摄古装剧《锦衣卫》。2007年，主演赵宝刚导演的青春剧《奋斗》
                </a>
                <a>
                    2006年，参演电视剧《与青春有关的日子》，开始在影视圈崭露头角 [1] [69] 。2005年，拍摄古装剧《锦衣卫》。2007年，主演赵宝刚导演的青春剧《奋斗》
                </a>
            </el-tab-pane>
            <el-tab-pane label="站内消息" name="message">Config</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { ref,nextTick } from 'vue';

const activeName = ref('site')
const show = ref(false)
nextTick(() => {
    document.documentElement.addEventListener('click',() => show.value = false)
})
</script>

<style lang="scss" scoped>
.notification {
    @apply relative z-50;

    .lists {
        @apply absolute bg-white px-3 py-2 border rounded-md shadow-md right-0 z-10 w-[300px] text-sm;
        a{
            @apply truncate overflow-ellipsis block border-b pb-2 mb-3 hover:text-violet-700;
        }
    }
}
</style>