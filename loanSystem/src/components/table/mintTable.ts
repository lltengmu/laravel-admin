import { ElTable, ColumnStyle } from 'element-plus'
import { loanApplication,status } from '@/store/caseStore';
class MintTable<T> {
    protected data = ref([]);
    public pageSize = ref<number>(10);
    public currentPage = ref<number>(1)
    public multipleTableRef = ref<InstanceType<typeof ElTable>>();
    public multipleSelection = ref<any[]>([]);
    public filterOptions = [{ value: 'Option1', label: 'Option1' }]
    public pageSizes = [{ id: 1, value: 5 }, { id: 2, value: 10 }, { id: 3, value: 20 }]
    /**
     * 点击页码的事件处理函数
     * @param value:number 当前页 
     * @returns void
     */
    public handleCurrentChange = (value: number) => {
        this.currentPage.value = value
    };
    /**
     * 点击选择框的事件处理函数
     * @returns void
     */
    public handleSelectionChange = (val: any[]) => this.multipleSelection.value = val
    /**
     * 每页展示的数据量发生变化时的事件处理函数
     * @returns void
     */
    public handlePageSizesChange = (value: number): any => this.pageSize.value = value
    /**
     * 表头样式定义
     * @returns ColumnStyle<any>
     */
    public handleHeaderRowStyle = (): ColumnStyle<any> => {
        return {
            textAlign: "left",
            color: "#3A3F63"
        }
    }
    /**
     * 行样式
     * @returns ColumnStyle<any>
     */
    public handleRowStyle = (): ColumnStyle<any> => {
        return {
            textAlign: "left",
            padding: 0,
            fontSize: '14px',
            color: "#3A3F63",
            cursor: "pointer",
            zIndex: 99
        }
    }
}
export default new MintTable();