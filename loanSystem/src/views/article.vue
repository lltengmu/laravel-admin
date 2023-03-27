<template>
    <div class="article">
        <AnimateList teg="ul" :duration="5">
            <li 
                :data-index="index"
                v-for="(article, index) of articles" 
                :key="article.id"
                >
                {{ article.title }}
            </li>
        </AnimateList>
    </div>
</template>

<script setup lang="ts">
import articleApi from '@/api/articleApi';
const articles = ref();


articleApi.article().then(({data}) =>articles.value = data)

// const del = (index: number) => articles.value.splice(index, 1)


</script>

<style lang="scss" scoped>
.article {
    width: 100vw;
    height: 100vw;
    padding: 30px;
    background: #34495e;

    ul {
        li {
            padding: 10px;
            margin-bottom: 20px;
            background: #f1c40f;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
    }
}
</style>