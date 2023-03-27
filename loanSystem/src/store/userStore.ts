import userApi,{ User } from "@/api/userApi";
import { defineStore } from "pinia";

export default defineStore('user',{
    state:() => {
        return {
            info: {} as User | null,
        }
    },
    actions:{
        async getUserInfo(){
          const res = await userApi.info();
          this.info = res.data;
        }
    }
})