import * as yup from 'yup'

yup.setLocale({
    mixed:{
        required:'${label}必须输入'
    },
    string:{
        matches:'${label}格式错误',
        min:'${label}最少需要三个字符'
    },
})
export default yup