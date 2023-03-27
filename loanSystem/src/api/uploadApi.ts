import http from '@/plugins/axios';

export interface Upload {
    url: string
}
class uploadApi {
    public uploadImage(data:FormData) {
        return http.request<Upload>({
            method:'post',
            url: `/upload/image`,
            data
        })
    }
}
export default new uploadApi()