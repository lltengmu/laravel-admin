import { ref } from "vue";
type item = {
    id:number,
    identify:string,
    enName:string,
    image:string
}
const identifys = ref<item[]>([
    { id:1, identify:"用户",enName:"clients",image:"/identifes/clients.png" },
    { id:2, identify:"管理员",enName:"individual",image:"/identifes/individual.png" },
    { id:3, identify:"服务提供者",enName:"serviceProvider",image:"/identifes/serviceProvider.png" },
])
export default () => identifys