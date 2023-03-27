import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { Plugin } from 'vite'
export default function autoImport(plugin: Plugin[]) {
    plugin.push(
        //子东引入api
        AutoImport({
            //自动导入element api
            resolvers: [ElementPlusResolver()],
            //vue api 自动导入
            imports: ['vue', 'vue-router'],
            //指定生成的类型声明文件放在哪个位置(这个文件会自动生成)
            dts:'types/auto-imports.d.ts'
        }),
        //elemntUI 与自定义组件的自动引入
        Components({
            resolvers: [ElementPlusResolver()],
            //自动加载的自定义组件目录，默认值为 ['src/components']
            dirs: ['src/components'], 
            //组件名称包含目录，防止同名组件冲突
            directoryAsNamespace: true,
            //指定类型声明文件，为true时在项目根目录创建
            dts: 'types/components.d.ts',
        }),
    )
}