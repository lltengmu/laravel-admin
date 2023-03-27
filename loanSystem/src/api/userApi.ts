import http from '@/plugins/axios';

export interface User {
    name: string
    age: number
    avatar: string,
    permissions:string[]
}
export interface ILoginData {
    account:string,
    password:string
}
interface LoginInterface {
    client:Record<string,any>
    token:string
}
class userApi {
    public info() {
        return http.request<User>({
            url: `/user/info`
        })
    }
    public login(data:ILoginData) {
        return http.request<LoginInterface>({
            url: `/login`,
            method: 'post',
            data
        })
    }
    public check(){
        return http.request({
            url:`/check`
        })
    }
}
export default new userApi()