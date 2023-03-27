<template>
    <form id="login" class="h-full min-w-[500px] px-24">
        <global-headerNotAccount label-text="Don’t have an account?" />
        <div class="">
            <p class="text-4xl font-semibold uppercase">CREATE AN ACCOUNT</p>
            <p class="mt-4 text-gray-400">Create your account to start managing your wealth.</p>
            <div class="mt-10">
                <label for="" class="text-lg">Email Address</label>
                <el-input class="h-10 mt-1" v-model="registerForm.email" placeholder="Please input your email" />
            </div>
            <div class="mt-10">
                <label for="" class="text-lg">Password</label>
                <el-input class="h-10 mt-1" placeholder="Please input your password" v-model="registerForm.password" show-password />
            </div>
            <div class="mt-10">
                <label for="" class="text-lg">Confirm Password</label>
                <el-input class="h-10 mt-1" placeholder="Please confirm your password" v-model="registerForm.password" show-password />
            </div>
            <div class="flex justify-between mt-8">
                <p class="mt-4 text-gray-400">By creating account, you agree to our <span class="text-black font-bold">Terms & Conditions</span></p>
            </div>
            <global-button class="w-48 h-10 mt-10" text="Create an account" />
        </div>
    </form>
</template>

<script setup lang="ts">
const registerForm = ref({
    email: null,
    password: null,
    remenberMe: false
});
</script>

<style scoped>

</style>