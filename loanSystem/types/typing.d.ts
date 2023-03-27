declare namespace toastui {
    class Editor {
        constructor(options: any)
        getMarkdown: () => string;
        getHTML: () => string
        on: (event: string, callback: Function) => void;
        removeHook:(type:string) => void;
        addHook:(type:string,handle:Function) => void;
        setHeight:(height:string) => viod
        focus:() => viod
    }
}

declare class wangEditor {
    constructor(options:any)
}