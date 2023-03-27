interface ResponseResult<T> {
    code: number,
    message: string,
    status: 'success' | 'error',
    data: T
}

interface CaseInterface {
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
    client: {
        id: number,
        first_name: string,
        last_name:string
    },
    company: {
        id: number,
        name: string
    }
    lbo_case_status:{
        id:number
        label_tc:string
        label_en:string
    }
}