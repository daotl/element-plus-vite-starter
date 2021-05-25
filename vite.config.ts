import { UserConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

const config: UserConfig = {
  plugins: [
    tsconfigPaths(),
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
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
