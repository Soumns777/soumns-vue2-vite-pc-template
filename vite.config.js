import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import eslint from 'vite-plugin-eslint'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  publicDir: 'public',
  build: {
    chunkSizeWarningLimit: 1500,
    target: 'modules',
    outDir: 'dist/www', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    sourcemap: false, // 构建后是否生成 source map 文件
    rollupOptions: {
      output: {
        // 切割过大的包
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  },
  optimizeDeps: {
    include: ['vconsole', 'axios']
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    hmr: true, //热更新
    proxy: {
      '/api': {
        target: 'http://192.168.60.202:3001', //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  plugins: [
    createVuePlugin(),
    eslint(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle'
          }
        })
      ]
    })
  ]
})
