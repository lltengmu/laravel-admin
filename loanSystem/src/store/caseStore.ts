import { defineStore } from "pinia";

export interface Cases {
    no?: number
    firstName?: string
    lastName?: string
    loanLimit?: number
    loanCompany?: string
    repaymentPeriod?: string
    paymentDate?: string
    status?: string
    operate?: string
}

export default defineStore('case',{
    state:()=>({
        currentPage:1,
        caselist:[
            {
                no: 1,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 2,
                firstName: "dsa",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxxsaa",
                repaymentPeriod: "2022-04-16",
                paymentDate: "2022-01-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 3,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 4,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 5,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 6,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 7,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 8,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 9,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 10,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 11,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 12,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 13,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 14,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
            {
                no: 15,
                firstName: "李",
                lastName:"大哥",
                loanLimit:165161,
                loanCompany:"faxsa",
                repaymentPeriod: "2022-03-16",
                paymentDate: "2022-04-12",
                status: "成功",
                operate: '导出'
            },
        ] as Cases[]
    }),
    getters:{
        renderList(state){
            return state.caselist
        }
    }
})