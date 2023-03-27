<template>
    <div class="h-screen w-[400px]">
        <section class="banner h-full"></section>
        <section class="content h-full p-10 z-10 absolute top-0">
            <div class="logo-wrapper items-center relative h-full">
                <img src="/images/logo.png" class="inline-block" alt="logo">
                <p class="inline-block text-white font-bold ml-4 uppercase">loanSystem</p>
                <main class="mt-14 text-3xl text-white font-semibold leading-10">
                    <p class="uppercase mb-4">do it <span>now</span></p>
                    <p class="uppercase mb-4">some time <span>later</span></p>
                    <p class="uppercase mb-4">becoms <span>never</span></p>
                </main>
                <footer class="absolute text-white bottom-1 text-base">
                    Terms & Conditions | Privacy Policy
                </footer>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
section.banner {
    position: relative;
    background-image: url(/images/banner-2.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    &::before {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #2E3CB3 0%, #222653 100%);
        opacity: .3;
    }
}

section.content {
    color: #DAE0F2;

    p {
        span {
            color: #71A0FE;
        }
    }
}
.banner{
    &::after{
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #2E3CB3 0%, #222653 100%);
        opacity: .3;
    }
}
</style>