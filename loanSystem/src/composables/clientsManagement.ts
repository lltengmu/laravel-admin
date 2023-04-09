import clientsStore from '@/store/clientsStore';
import ClientsInfomations from "./clientsInfomations"

class ClientsManagement extends ClientsInfomations {
    public drawer = ref(false);
    protected clientsStoreService = clientsStore();
    protected currentClientId = ref(0);
    public currentClientsbak = ref();
    constructor(){
        super()
    }
    /**
     * extends parent class to own options about client'informations
     * 
     * return ClientsInfomations class options
     */
    public clientInformation(){
        return super.options(['basicInformation','address','jobInformation']);
    }
    /**
     * connect options with client's value
     */
    public clientsInformationWithValue(){
        return super.options(['basicInformation','address','jobInformation']).map(item => {
            return {
                title:item.title,
                elements:item.elements.map((el) => {
                    const current = this.currentClient(this.currentClientId.value);
                    if(Object.keys(current).includes(el.name))el.value = current[el.name]
                    return {...el}
                })
            }
        })
    }
    /**
     * for handle inspeect'button event
     * first step to open drawer component and then setup current client
     * @param id:client's id
     */
    public handleInspect(id:number){
        //打开抽屉组件
        this.drawer.value = !this.drawer.value;
        //设置当前查看的client
        this.currentClientId.value = id;
        // this.setupCurrenClient(id)
        // console.log(this.clientsInformationWithValue(id));
        // console.log(this.currentClient(id));
    }
    /**
     * return clients data
     * @returns clientsTable[]
     */
    public clientTableData(){
        return this.clientsStoreService.clientsTable
    }
    /**
     * for handle delete button event
     */
    public handleDelete(){}
    /**
     * setup to show which client's information
     * @param id:client's id 
     * @returns void
     */
    public currentClient(id:number){
        return this.clientTableData().filter(item => item.id == id)[0]
    }
}

export default new ClientsManagement()