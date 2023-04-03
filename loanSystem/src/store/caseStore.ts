import comonApi from "@/api/comonApi";
import { defineStore } from "pinia";
export interface CasesInterface {
    id: number,
    sys_id: string,
    client_id: number,
    company_id: number,
    case_status: number,
    loan_amount: number,
    payment_amount: number,
    purpose: number,
    case_remark: string,
    disbursement_date: string,
    repayment_period: string,
    status: number,
    create_datetime: string
    client: {
        id: 6,
        first_name: string,
        last_name: string,
        appellation: number,
        password: string,
        HKID: number,
        date_of_birth: string,
        marital_status: number,
        mobile: number,
        email: string,
        nationality: string,
        area: string,
        addres: string,
        address1: string,
        address2: string,
        building: string,
        floor: string,
        unit: string,
        job_status: number,
        salary: number,
        company_name: string,
        company_addres: string,
        create_datetime: string,
        update_datetime: string,
        last_login_datetime: string,
        status: number
    },
    company?: {
        id: number,
        name: string
    }
    lbo_case_status: {
        id: number
        label_tc: string
        label_en: string
    }
}
export interface loanApplication<T> {
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
    status?: T
    //根据状态的类型
    type?: string
    operate?: string
}
export interface approvalManagement<T> {
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
    status?: T
    //根据状态的类型
    type?: string
}
export interface status {
    id: number
    label_en: string,
    label_tc: string
    isComponent:boolean
}
export default defineStore('case', {
    state: () => ({
        //case 源数据
        casesList: [] as CasesInterface[],
    }),
    getters: {
        loanApplication: (state): loanApplication<status>[] => state.casesList.map((item) => {
            return {
                id: item.id,
                firstName: item.client.first_name,
                lastName: item.client.last_name,
                loan_amount: item.loan_amount,
                company: item.company?.name ?? "未选择服务提供商",
                disbursement_date: item.disbursement_date,
                repayment_period: item.repayment_period,
                status: Object.assign(item.lbo_case_status,{ isComponent:true }),
            }
        }).filter((item) => {
            return (item.status.id !== 3) && (item.status.id !== 4);
        }),
        approvalManagement: (state): approvalManagement<status>[] => {
            return state.casesList.filter((item) => item.lbo_case_status.id !== 1 && item.lbo_case_status.id !==2 )
                .map((item) => {
                    return {
                        id: item.id,
                        firstName: item.client.first_name,
                        lastName: item.client.last_name,
                        loan_amount: item.loan_amount,
                        company: item.company?.name ?? "未选择服务提供商",
                        disbursement_date: item.disbursement_date,
                        repayment_period: item.repayment_period,
                        status: Object.assign(item.lbo_case_status,{ isComponent:false }),
                    }
                })
        }
    },
    actions: {
        async initDataTable() {
            const cases = await comonApi.getCases()
            this.casesList.push(...cases)
        },
        //更新case状态
        updateCaseStatus(options: { id: number, caseId: number, label_tc: string, label_en: string }) {
            this.casesList.forEach(item => {
                if (item.id == options.caseId) {
                    Object.assign(item.lbo_case_status, { id: options.id, label_tc: options.label_tc, label_en: options.label_en })
                }
            });
        }
    },
})