import { App } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import routes from './routes'
import autoload from './autoload'
import guard from './guard'
import userStore from '@/store/userStore'


const router = createRouter({
    history:createWebHistory(),
    routes:[...routes]
})

//挂载路由
export async function setupRouter(app:App){
    //页面每刷新一次就读取一次用户信息
    // await userStore().getUserInfo();
    autoload(router)
    guard(router)
    app.use(router)
}
export default router;