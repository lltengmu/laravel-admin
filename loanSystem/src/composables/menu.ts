import { IMenu } from "#/menu";
import routers from "@/router";
import utils from "@/utils";
import { CacheEnum } from "@/enum/CacheEnum";
import { RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import router from "@/router";

class Menu {
    public expand = ref(false);
    public menus = ref<IMenu[]>([])
    public history = ref<IMenu[]>([])
    public close = ref(utils.store.get(CacheEnum.MENU_IS_CLOSE) ?? true)
    public route = ref<null | RouteLocationNormalized>(null)
    constructor() {
        this.menus.value = this.getMenuByRoute()
        this.history.value = this.getHistoryMenu()
    }
    //对历史菜单的处理,用户的菜单是根据权限获取的，当用户权限发生改变的时候需要过滤掉没有权限的路由
    private getHistoryMenu(){
        const routes = [] as RouteRecordRaw[];
        router.getRoutes().map(r => routes.push(...r.children))
        const menus = utils.store.get(CacheEnum.HISTORY_MENU) as IMenu[] ?? [];
        return menus.filter(m => {
            return routes.some(r => r.name == m.route)
        })
    }
    toggleParentMenu(menu:IMenu){
        
        this.menus.value.forEach(m => {
            if(m == menu){
                m.isClick = !m.isClick
            }
        })
    }
    toggleState(){
        console.log(111);
        this.close.value = !this.close.value
        utils.store.set(CacheEnum.MENU_IS_CLOSE,this.close.value)
    }
    setCurrentMenu(route:RouteLocationNormalized){
        this.menus.value.forEach((item) => {
            // item.isClick = false
            item.children?.forEach((cmenu) => {
                cmenu.isClick = false;
                if(cmenu.route == route.name){
                    item.isClick = true
                    cmenu.isClick = true
                }
            })
        })
    }
    //移除历史菜单
    removeHistoryMenu(menu:IMenu) {
        const index = this.history.value.indexOf(menu)
        this.history.value.splice(index,1)
        //将最新的历史菜单存储到本地缓存中
        utils.store.set(CacheEnum.HISTORY_MENU,this.history.value)
    }
    //添加历史菜单
    addHistoryMenu(route:RouteLocationNormalized) {
        //路由元信息中不存在menu字段,则退出
        if(!route.meta.menu)return;
        this.route.value = route
        //将路由元信息中的menu属性解构出来与路由names属性,组合成新的对象 { title:'',route:'' }
        const menu:IMenu = { ...route.meta?.menu,route: route.name as string } 
        //判断历史菜单中是否已经存在该菜单
        const isHas = this.history.value.some(item =>item.route === route.name )
        //不存在则将当前菜单加入历史队列
        if(!isHas)this.history.value.push(menu)
        //历史菜单超过10个，默认弹出最后一个
        if(this.history.value.length > 10){
            this.history.value.pop()
        }
        //将最新的历史菜单存储到本地缓存中
        utils.store.set(CacheEnum.HISTORY_MENU,this.history.value)
    }
    getMenuByRoute() {
        //获取到所有的路由
        return routers.getRoutes()
            //筛选具有子路由的路由，且父级路由元信息中具有menu属性的路由
            .filter(route => route.children.length && route.meta.menu)
            .map(route => {
                let menu: IMenu = { ...route.meta.menu }
                menu.children = route.children.filter(route => route.meta?.menu)
                    .map(route => {
                        return { ...route.meta?.menu, route: route.name }
                    }) as IMenu[];
                return menu;
            })
            .filter(menu => menu.children?.length)
    }
}


export default new Menu();