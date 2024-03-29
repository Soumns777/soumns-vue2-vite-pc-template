import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

import path from 'path'

export default defineConfig({
  theme: {
    colors: {
      dfl: '#80D1C8', // 蒂芙尼蓝
      kly: '#002EA6', // 克莱因蓝
      npl: '#FFE78F', // 拿坡里黄
      zgh: '#D7000F', // 中国红
      ams: '#FF770F' // 爱马仕橙
    }
  },
  rules: [
    // 在这个可以增加预设规则, 也可以使用正则表达式
    [
      'soumns-center',
      {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        'box-sizing': 'border-box'
      }
    ],
    [
      'soumns-flex',
      {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'box-sizing': 'border-box'
      }
    ],
    [
      'soumns-bg',
      {
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%'
      }
    ],
    [
      'soumns-min',
      {
        'min-width': '100vw',
        'min-height': '100vh',
        'box-sizing': 'border-box'
      }
    ],
    // 动态背景
    [
      /^soumns-bg-(.*)$/,
      ([_, d]) => {
        let img = d.split('-')[0]
        let type = d.split('-')[1]
        let Url = path.resolve(__dirname, './src/assets/uploads')
        return {
          background: `url('.${Url}/${img}.${type}')`,
          'background-size': '100% 100%',
          'background-repeat': 'no-repeat',
          'box-sizing': 'border-box'
        }
      }
    ]
  ],
  shortcuts: [
    // 动态颜色
    [/^soumns-btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100  py-2 px-4  font-semibold rounded-lg shadow-md  border-none  cursor-pointer text-center`]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' ')
})
