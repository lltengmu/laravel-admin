import uploadApi from "@/api/uploadApi";
import Editor from "@toast-ui/editor"
export default class {
    editor: Editor
    isFullscreen: boolean = false
    constructor(el: string, initialValue: string, public height: string) {
        this.editor = new Editor({
            el: document.querySelector(el)!,
            previewStyle: 'vertical',
            initialEditType: 'markdown',
            height: height,
            toolbarItems: this.toolbar() as [],
            initialValue: initialValue
        });
        this.ImageHook()
    }
    private toolbar() {
        //自定义富文本编辑器的菜单
        return [
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
            //自定义编辑器菜单按钮
            [
                {
                    el: this.fullscreen(),// 触发自定义菜单的DOM元素
                    command: 'fullscreen',
                    tooltip: 'fullscreen'
                }
            ]
        ];
    }
    private fullscreen() {
        //使用编程的方式创建元素
        const button = document.createElement('button') as HTMLButtonElement
        //设置元素内容
        button.innerHTML = '全屏';
        //设置样式
        button.style.margin = '0';
        //设置事件
        button.addEventListener('click', () => {
            this.toggleFullscreen()
        })
        //添加键盘事件
        document.documentElement.addEventListener('keyup', (event: KeyboardEvent) => {
            if (event.key == 'Escape' && this.isFullscreen) {
                this.toggleFullscreen()
            }
        })

        //将元素返回
        return button
    }
    private toggleFullscreen() {
        const toastEL = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
        toastEL.classList.toggle('fullscreen')
        this.isFullscreen = !this.isFullscreen
        if (this.isFullscreen === false) {
            this.editor.setHeight(this.height)
        }else{
            this.editor.setHeight('100vh')
        }
    }
    private ImageHook() {
        this.editor.removeHook('addImageBlobHook');
        this.editor.addHook('addImageBlobHook', async (blob: any, callback: Function) => {
            const form = new FormData();
            form.append('file', blob, blob.name)
            const res = await uploadApi.uploadImage(form);
            callback(res.data.url, blob.name)
        });
    }
}