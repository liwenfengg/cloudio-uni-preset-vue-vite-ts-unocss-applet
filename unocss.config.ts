import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  // presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'


import { presetApplet, presetRemToRpx, transformerRenameClass } from 'unocss-applet'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    // presetUno(),
    presetApplet(),
    presetRemToRpx({ baseFontSize: 16, screenWidth: 375 }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [

    // https://github.com/unocss/unocss/tree/main/packages/transformer-directives
    transformerDirectives(),

    transformerRenameClass(),


    // https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group
    transformerVariantGroup(),

  ],
  // https://github.com/unocss/unocss#safelist
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
