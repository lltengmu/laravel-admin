interface Menu{
    title?:string
    icon?:string
    isClick?:boolean
    route?:string
    //定义菜单是分组菜单还是单条菜单
    group?:boolean
}

export interface IMenu extends Menu{
    children?:Menu[]
}