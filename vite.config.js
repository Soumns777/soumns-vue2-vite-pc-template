import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import eslint from 'vite-plugin-eslint';

function resolve(dir) {
  return path.join(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    hmr: true, //热更新
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  plugins: [
    createVuePlugin(),
    eslint(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
});
