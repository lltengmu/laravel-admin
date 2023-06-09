import userApi, { ILoginData } from '@/api/userApi'
import { CacheEnum } from '@/enum/CacheEnum'
import utils from '@/utils'
import router from '@/router'
import userStore from '@/store/userStore'
import store from './store'



export async function login(values:ILoginData) {
    //发送登录请求
    const { token } = await userApi.login(values);
    //存储token
    utils.store.set(CacheEnum.TOKEN_NAME, token )
    //判断在登录之前是否有被缓存的目标地址
    const routeName = store.get(CacheEnum.REDIRECT_ROUTE_NAME)?.route?? 'admin.home';
    //页面跳转
    router.push({name:routeName})
}

export function logout() {
    utils.store.remove(CacheEnum.TOKEN_NAME)
    //退出后重定向到首页
    router.push({ path:"/" })
    //删除用户信息
    userStore().info = null;
}

export function isLogin(){
    return Boolean(store.get(CacheEnum.TOKEN_NAME));
}