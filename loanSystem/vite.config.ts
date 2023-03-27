import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './vite/alias';
import { parseEnv } from "./vite/utils"
import setupPlugins from "./vite/plugins/index"
import { visualizer } from "rollup-plugin-visualizer";

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === "build";
  const root = process.cwd()
  //返回一个配置对象，object类型
  const env = parseEnv(loadEnv(mode, root))
  return {
    plugins: [...setupPlugins(isBuild, env), visualizer()],
    resolve: {
      alias
    },
    build: {
      rollupOptions: {
        //每次打包的时候清空dist目录
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
        },
      },
    },
    server: {
      proxy: {
        '/api': {
          //将/api访问转换为target
          target:env.VITE_API_URL,
          //跨域请求携带cookie
          changeOrigin: true,
          //url 重写删除`/api`
          rewrite: (path:any) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
}