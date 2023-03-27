import { ref } from 'vue'
type Menus = {
    id: number,
    title: string,
    icon: string,
    name:string
}
function useMenus(identity:string) {
    switch(identity){
        case "individual":
            const individualMenus = ref<Menus[]>([
                { id: 1, title: "贷款申请",name:"loanApplication", icon: 'icon-single-04' },
                { id: 2, title: "审批管理",name:"approvalManagement", icon: "icon-app-store" },
                { id: 3, title: "仪表板",name:"dashbord", icon: "icon-chart-bar-33" },
                { id: 4, title: "报告",name:"report", icon: "icon-world-2" },
                { id: 5, title: "贷款模板管理",name:"loanTemplateManagement", icon: "icon-plug" },
                { id: 6, title: "客户管理", name:"clientsManagement", icon: "icon-globe-2" },
                { id: 7, title: "服务提供商管理",name:"serviceProviderManagement", icon: "icon-form" },
                { id: 8, title: "用户管理",name:"userManagement", icon: "icon-single-copy-06" },
            ]);
            return individualMenus;
            break;
        case "clients":
            const clientsMenus = ref<Menus[]>([
                { id: 1, title: "贷款申请",name:"loanApplication", icon: 'icon-single-04' },
                { id: 2, title: "审批管理",name:"approvalManagement", icon: "icon-app-store" },
                { id: 4, title: "报告", name:"report", icon: "icon-world-2" },
            ]);
            return clientsMenus;
            break;
        case "serviceProvider":
            const serviceProviderMenus = ref<Menus[]>([
                { id: 1, title: "贷款申请", name:"loanApplication",  icon: 'icon-single-04' },
                { id: 2, title: "审批管理", name:'approvalManagement', icon: "icon-app-store" },
                { id: 4, title: "报告", name:"report",icon: "icon-world-2" },
            ]);
            return serviceProviderMenus;
            break;
    }
}

export default useMenus;