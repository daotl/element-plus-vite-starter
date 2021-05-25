import { UserConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import vue from '@vitejs/plugin-vue'

const config: UserConfig = {
  plugins: [tsconfigPaths(), vue()],
  // Aliases already provided by 'vite-tsconfig-paths'
  // resolve: {
  //   alias: [{ find: '@', replacement: '/src' }],
  // },
}

export default config
