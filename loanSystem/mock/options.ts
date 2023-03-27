import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/resouce/options',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: "请求成功",
                status: "success",
                data: [
                    {
                        title: "基本個人資料",
                        elements: [
                            { id: 1, title: "姓氏", name: "firstName", icon: "fa-signature", isInput: true, placeholder: "请输入姓氏", value: '' },
                            { id: 2, title: "名字", name: "lastName", icon: "fa-signature", isInput: true, placeholder: "请输入名字", value: '' },
                            { id: 3, title: "稱謂", name: "appellation", icon: "fa-user-tie", isInput: false, options: [
                                { id: 1, name: '小姐', },
                                { id: 2, name: '女士' },
                                { id: 3, name: '先生' },
                                { id: 4, name: '太太' }
                            ],placeholder:"请选择称谓", value: 1 },
                            { id: 4, title: "電話號碼", name: "phone", icon: "fa-mobile", isInput: true, placeholder: "请输入電話號碼", value: '' },
                            { id: 5, title: "電郵地址", name: "email", icon: "fa-envelope", isInput: true, placeholder: "電郵地址", value: '' },
                            { id: 6, title: "國籍", name: "nationality", icon: "fa-earth-americas", isInput: true, placeholder: "國籍", value: '' },
                            { id: 7, title: "出生日期", name: "birthday", icon: "fa-cake-candles", isInput: true, placeholder: "出生日期", value: '' },
                        ]
                    },
                    {
                        title: "住宅地址",
                        elements: [
                            { id: 1, title: "單位", name: "affiliatedUnit", icon: "fa-regular fa-buildings", isInput: true, placeholder: "请输入單位", value: '' },
                            { id: 2, title: "樓層", name: "floor", icon: "fa-building-flag", isInput: true, placeholder: "请输入樓層", value: '' },
                            { id: 3, title: "座數", name: "numberOfSeats", icon: "fa-regular fa-building-user", isInput: true, placeholder: "请输入座數", value: '' },
                            { id: 4, title: "地址第一行", name: "addressOne", icon: "fa-location-dot", isInput: true, placeholder: "请输入地址第一行", value: '' },
                            { id: 5, title: "地址第二行", name: "addressTwo", icon: "fa-location-dot", isInput: true, placeholder: "请输入地址第二行", value: '' },
                            { id: 6, title: "地區", name: "area", icon: "fa-objects-column", isInput: false, options:[
                                { id: 1, name: '港島' },
                                { id: 2, name: '九龍' },
                                { id: 3, name: '新界' }
                            ], value: 1 },
                            { id: 7, title: "身分證明", name: "hkId", icon: "fa-id-card-clip", isInput: true, placeholder: "请输入身分證明", value: '' },
                        ]
                    },
                    {
                        title: "就業資料",
                        elements: [
                            { id: 1, title: "職業", name: "occupation", icon: "fa-user-doctor", isInput: false, options:[
                                { id:1,name:'受雇' },
                                { id:2,name:'自雇' },
                            ], value: 1 },
                            { id: 2, title: "HK$每月收入", name: "salary", icon: "fa-comment-dollar", isInput: true, placeholder: "请输入每月收入", value: '' },
                            { id: 3, title: "公司名稱", name: "companyName", icon: "fa-buildings", isInput: true, placeholder: "请输入公司名稱", value: '' },
                            { id: 4, title: "公司電話", name: "companyPhone", icon: "fa-phone-volume", isInput: true, placeholder: "请输入公司電話", value: '' },
                            { id: 5, title: "公司地址", name: "companyAddress", icon: "fa-location-crosshairs", isInput: true, placeholder: "请输入公司地址", value: '' },
                        ]
                    },
                    {
                        title: "貸款資料",
                        elements: [
                            { id: 1, title: "欲申請之貸款額", name: "expectedAmount", icon: "fa-money-check-dollar-pen", isInput: true, placeholder: "请输入欲申請之貸款額",value:'' },
                            { id: 2, title: "還款期", name: "repaymentReriod", icon: "fa-regular fa-clock", isInput: true, placeholder: "请输入還款期",value:'' },
                            { id: 3, title: "貸款用途", name: "use", icon: "fa-bring-forward", isInput: false, options: [
                                { id:1,name:'一般個人開支' },
                                { id:2,name:'裝修' },
                                { id:3,name:'進修' },
                            ],value:1 },
                        ]
                    }
                ]
            }
        },
    },

] as MockMethod[]