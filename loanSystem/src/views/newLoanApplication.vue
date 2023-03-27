<template>
    <form id="newloanApplication" class="px-24 scrollElement w-full h-screen overflow-y-scroll">
        <global-headerNotAccount label-text="Already have an account?" />
        <p class="text-4xl font-semibold uppercase">YOUR BASIC INFORMATIONS</p>
        <p class="mt-4 text-gray-400">Please complete your basic informations.</p>
        <section class="basiInformation mt-10" v-for="(item,index) in data" :key="index">
            <div class="breakUpComponent">
                <h2 class="font-semibold">{{ item.title }}:</h2>
            </div>
            <div class="inputWrapper flex justify-start items-center flex-wrap">
                <global-input-or-select v-for="(formElement,i) in item.elements" :key="index" v-bind="formElement" v-model:value="formElement.value" />
            </div>
        </section>
        <footer class="py-10">
            <global-button class="float-right w-32 h-7" text="保存" />
        </footer>
    </form>
</template>

<script setup lang="ts">
import resourceApi from "@/api/resourceApi";
const { data } = await resourceApi.options()
</script>

<style lang="scss" scoped></style>