import { createApp } from 'vue'
import '@/styles/global.scss'
import 'element-plus/dist/index.css'
import router, { setupRouter } from './router'
import App from './App.vue'
import setupPlugins from './plugins/index'
import 'animate.css'

async function bootStrap() {
    const app = createApp(App)
    //这里需要保证插件在路由前面安装，因为要根据用户权限过滤路由
    setupPlugins(app)
    setupRouter(app)
    await router.isReady()
    app.mount('#app')
}
bootStrap()
