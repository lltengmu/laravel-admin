import comonApi from "@/api/comonApi";
import { defineStore } from "pinia";
import { ElTable, ColumnStyle } from 'element-plus'
export interface CasesTable {
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
    type?: string
    operate?: string
}

export default defineStore('case', {
    state: () => ({
        currentPage: 1,
        casesList: [] as CasesInterface[]
    }),
    getters: {
        caseTableData(state) {
            return state.casesList.map(item => {
                return {
                    id: item.id,
                    firstName: item.client.first_name,
                    lastName: item.client.last_name,
                    loan_amount: item.loan_amount,
                    company: item.company?.name ?? "未选择服务提供商",
                    disbursement_date: item.disbursement_date,
                    repayment_period: item.repayment_period,
                    caseStatus: item.lbo_case_status,
                } as CasesTable
            })
        }
    },
    actions: {
        async initDataTable() {
            const cases = await comonApi.getCases()
            this.casesList.push(...cases)
        },
        //表头样式定义
        handleHeaderRowStyle(): ColumnStyle<any> {
            return {
                textAlign: "left",
                color: "#3A3F63"
            }
        },
        //行样式
        handleRowStyle(): ColumnStyle<any> {
            return {
                textAlign: "left",
                padding: 0,
                fontSize: '14px',
                color: "#3A3F63",
                cursor: "pointer",
                zIndex: 99
            }
        },
        //更新case状态
        updateCaseStatus(options: { id: number, caseId: number, label_tc: string, label_en: string }) {
            this.casesList.forEach(item => {
                if(item.id == options.caseId){
                    Object.assign(item.lbo_case_status,{ id:options.id,label_tc:options.label_tc,label_en:options.label_en })
                }
            });
        }
    },
})