import userStore from "@/store/userStore";
import utils from "@/utils";
import { RouteRecordRaw ,Router } from "vue-router";
import autoloadRouteModule from "./module";
import getRoutes from "./view"

//根据env配置文件决定采取何种自动加载方式
let routes:RouteRecordRaw[] = utils.env.VITE_ROUTER_AUTOLOAD ? getRoutes() : autoloadRouteModule()

function autoload(router:Router){
    //读取登录用户信息
    // const user = userStore()
    routes.map(route => {
        route.children = route.children?.filter(r => {
            //判断子路由是否具有权限限制
            const permission = r.meta?.permission
            //如果有，则判断当前用户是否具有该权限，才可以访问；如果没有，则该页面正常访问
            // return permission ? user.info?.permissions.includes(permission) : true
            return true;
        })
        return route;
    })
    routes.forEach((item) =>router.addRoute(item))
}
export default autoload;