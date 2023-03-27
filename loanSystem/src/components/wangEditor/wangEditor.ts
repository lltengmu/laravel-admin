export default class {
    editor:wangEditor
    content:string
    toolbarconfig:{[key:string]:any}
    wangEditorConfig:{[key:string]:any}
    constructor(content:string,placeholder:string){
        this.editor = shallowRef()
        this.content = `<p>${content}</>`
        this.toolbarconfig = {}
        this.wangEditorConfig = { placeholder }
    }
    handleCreated(editor:any) {
        this.editor = editor // 记录 editor 实例，重要！
    }
}