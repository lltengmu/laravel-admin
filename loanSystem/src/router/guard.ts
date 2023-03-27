import utils from '@/utils';
import userStore from '@/store/userStore';
import { RouteLocationNormalized, Router } from 'vue-router'
import { CacheEnum } from '@/enum/CacheEnum';
import menuStore from '@/store/menuStore';
import { IMenu } from '#/menu';
class Guard {
    constructor(private router: Router) { }
    public run() {
        //定义路由的全局前置守卫
        this.router.beforeEach(this.beforeEach.bind(this))
    }
    private beforeEach(to:RouteLocationNormalized,from:RouteLocationNormalized){
        if(to.meta.auth && !this.token())return { name:"login" }
        if(to.meta.guest && this.token())return from; 
    }

    private token():IMenu | null {
        return utils.store.get(CacheEnum.TOKEN_NAME)
    }
}
export default (router: Router) => {
    return new Guard(router).run()
}