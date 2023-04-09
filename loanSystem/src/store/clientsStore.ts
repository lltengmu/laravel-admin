import comonApi from "@/api/comonApi";
import { defineStore } from "pinia";

export default defineStore('clients',{
    state:() =>({
        clients:[] as clientsInterface[],
        showClientInformation:{} as clientsTable
    }),
    getters:{
        clientsTable:(state):clientsTable[] =>{
            return state.clients.map((item)=>{
                return Object.assign(item,{ status:Boolean(item.status) })
            })
        },
    },
    actions:{
        async init(){
            const client = await comonApi.getClients();
            this.clients.push(...client)
        },
        currentClient(id:number){
            this.showClientInformation = this.clientsTable.filter(item => item.id == id)[0]
        },
    }
})