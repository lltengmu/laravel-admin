import comonApi from "@/api/comonApi";
import { defineStore } from "pinia";

export default defineStore('clients',{
    state:() =>({
        clients:[] as clientsInterface[]
    }),
    getters:{
        clientsTable:(state):clientsTable[] =>{
            return state.clients.map((item)=>{
                return Object.assign(item,{ status:Boolean(item.status) })
            })
        }
    },
    actions:{
        async init(){
            const client = await comonApi.getClients();
            this.clients.push(...client)
        }
    }
})