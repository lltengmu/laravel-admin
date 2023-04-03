class CustomTable {
    public pageSize = ref(10)
    public currentPage = ref<number>(1)
    public filterOptions = [{ value:'options',label:"Options" }]
    public pageSizes = [{ id: 1, value: 5 }, { id: 2, value: 10 }, { id: 3, value: 20 }]
    /**
     * 点击页码的事件处理函数
     * @param value:number 当前页 
     * @returns void
     */
    handleCurrentChange = (value: number) => this.currentPage.value = value;
    /**
     * 每页展示的数据量发生变化时的事件处理函数
     * @returns void
     */
    handlePageSizesChange = (value:number) => this.pageSize.value = value
}

export default new CustomTable();