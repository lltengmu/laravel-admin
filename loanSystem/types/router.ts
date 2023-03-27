import 'vue-router'
import { IMenu } from './menu'

declare module 'vue-router' {
  interface RouteMeta {
    auth?:boolean
    guest?:boolean
    //访问权限
    permission?:string
    menu?:IMenu
    //在定义路由元信息自定义进入动画
    enterClass?:string
    //在定义路由元信息中自定义离开动画
    leaveClass?:string,
  }
}