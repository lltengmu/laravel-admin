import comonApi from "@/api/comonApi";
import { defineStore } from "pinia";

export interface Cases {
    //编号
    id?: number
    //名字
    firstName?: string
    //姓氏
    lastName?: string
    //借款金额
    loan_amount?: number
    //贷款公司
    company?: string
    //借款日期
    disbursement_date?: string
    //还款日期
    repayment_period?: string
    //状态
    status?: string
    //根据状态的类型
    type?:string
    operate?: string
}

export default defineStore('case',{
    state:()=>({
        currentPage:1,
        dataTable:[] as Cases[]
    }),
    getters:{
        renderList(state){
            return state.dataTable
        }
    },
    actions:{
        async initDataTable(){
            const data = await comonApi.getCases()
            const dataTable = data.map(item => {
               return  {
                id:item.id,
                firstName:item.client.first_name,
                lastName:item.client.last_name,
                company:item.company?.name ?? "未选择服务提供商",
                loan_amount:item.loan_amount,
                disbursement_date:item.disbursement_date,
                repayment_period:item.repayment_period,
                status:item.lbo_case_status.label_tc,
                type:item.lbo_case_status.label_en
               } as Cases
            });
            this.dataTable.push(...dataTable)
        }
    }
})