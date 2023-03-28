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
    create_datetime:string
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
    lbo_case_status:{
        id:number
        label_tc:string
        label_en:string
    }
}