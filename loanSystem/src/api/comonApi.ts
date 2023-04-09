import Http from "@/plugins/axios";

class commenApi {
    public getCases(){
        return Http.request<CasesInterface[]>({
            url:'cases',
            method:"get"
        })
    }
    public getClients(){
        return Http.request<clientsInterface[]>({
            method:"get",
            url:"clients",
        })
    }
}
export default new commenApi();