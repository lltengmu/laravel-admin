interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // 更多环境变量...
    VITE_ROUTER_AUTOLOAD:boolean
    VITE_API_URL:string
    VITE_MOCK_ENABLE:boolean
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }