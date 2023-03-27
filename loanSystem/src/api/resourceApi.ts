import Http from "@/plugins/axios";
export interface options {
    id:number
    name:string
}
export interface elements {
    id: number;
    title: string;
    name: string;
    icon: string;
    isInput: boolean;
    placeholder?: string;
    value: string|number;
    options?:options[]
}
interface formElements {
    title:string
    elements:elements[]
}
class resourceApi {
    options() {
        return Http.request<formElements[]>({
            method:'get',
            url:"/resouce/options"
        })   
    }
}

export default new resourceApi();