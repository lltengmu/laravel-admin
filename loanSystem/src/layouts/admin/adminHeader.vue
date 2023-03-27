<template>
    <div class="px-4 py-2 flex justify-between bg-white">
        <section class="flex items-center">
            <img src="/images/logo.png" alt="logo.png">
            <p class="ml-2 font-bold">WEALTH</p>
        </section>
        <section class="flex items-center">
            <div class="input-container h-[32px] rounded-full flex items-center p-2">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" class="outline-none ml-2 input-container">
            </div>
            <div class="px-4 relative">
                <form action="">
                    <i class="fa-sharp fa-solid fa-bell"></i>
                    <span class="w-[8px] h-[8px] rounded-full bg-red-600 absolute text-sm right-[10px]"></span>
                </form>
            </div>
            <div class="w-[30px] h-[30px] rounded-full bg-blue-400 flex justify-center items-center text-white">N</div>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.input-container {
    background: rgb(245, 245, 250);
}
</style>