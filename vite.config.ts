import { UserConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import'

const config: UserConfig = {
  plugins: [
    tsconfigPaths(),
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3)
            return `element-plus/packages/theme-chalk/src/${name}.scss`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          },
        },
      ],
    }),
  ],
  // Aliases already provided by 'vite-tsconfig-paths'
  // resolve: {
  //   alias: [{ find: '@', replacement: '/src' }],
  // },
}

export default config
