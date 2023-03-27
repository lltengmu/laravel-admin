import Http from "@/plugins/axios";

class commenApi {
    public getCases(){
        return Http.request<CaseInterface[]>({
            url:'cases',
            method:"get"
        })
    }
}
export default new commenApi();