<template>
    <form id="login" @submit="onSubmit" class="h-full px-24">
        <global-headerNotAccount label-text="Don’t have an account?" />
        <div class="px-40">
            <p class="text-4xl font-semibold uppercase">welcome to loanSystem!</p>
            <p class="mt-4 text-gray-400">Sign in and start managing your wealth account.</p>
            <div class="mt-10">
                <label for="" class="text-lg">Email Address</label>
                <el-input class="h-10 mt-1" v-model="email" placeholder="Please input your email" />
                <hd-error :error="emailError" />
            </div>
            <div class="mt-10">
                <label for="" class="text-lg">Password</label>
                <el-input class="h-10 mt-1" v-model="password" placeholder="Please input your password" show-password />
                <hd-error :error="passwordError" />
            </div>
            <div class="flex justify-between mt-8">
                <el-checkbox>Remember me on this device</el-checkbox>
                <span class="font-bold cursor-pointer hover:text-blue-500">Forgot Password?</span>
            </div>
            <global-button type="submit" class="w-48 h-10 mt-10" text="登录" />
        </div>
    </form>
</template>

<script setup lang="ts">
import v from '@/plugins/validate'
import utils from '@/utils';
const { yup,useForm,useField } = v
//定义验证规则
const schema = yup.object({
    email: yup.string().matches(/^\d{11}|.+@.+$/).required().label("邮箱"),
    password: yup.string().min(3).required().label("密码"),
})
const { handleSubmit } = useForm({
    initialValues:{
        email:'',
        password:''
    },
    validationSchema:schema
})
const { errorMessage:emailError,value:email } = useField<string>('email')
const { errorMessage:passwordError,value:password } = useField<string>('password')

const onSubmit = handleSubmit((values:any) => {
    utils.user.login(values)
})
</script>

<style lang="scss" scoped>
</style>