import type { Preset, SourceCodeTransformer } from 'unocss'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import {
  presetApplet,
  presetRemToRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

const presets: Preset[] = []

const transformers: SourceCodeTransformer[] = []

if (process.env.UNI_PLATFORM === 'h5') {
  // https://github.com/unocss/unocss/tree/main/packages/preset-uno
  presets.push(presetUno())

  presets.push(presetAttributify())
}
else {
  // https://github.com/unocss-applet/unocss-applet
  presets.push(presetApplet())
  presets.push(presetRemToRpx())

  // don't change the order
  // https://github.com/unocss/unocss/tree/main/packages/preset-attributify/
  transformers.push(transformerAttributify())
  transformers.push(transformerApplet())
}

export default defineConfig({
  // theme: {
  //   backgroundSize: {
  //     auto: 'auto',
  //     cover: 'cover',
  //     contain: 'contain',
  //   },
  // },
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['text-b-f', 'text-base text-#801DAE font-sans text-4xl'],
    ['flex-center', 'flex items-center'],
    ['flex-col-center', 'flex flex-col items-center'],
  ],

  presets: [
    presetIcons({
      warn: true,
    }),

    // https://github.com/unocss/unocss/tree/main/packages/preset-typography
    presetTypography(),

    // https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),

    ...presets,
  ],
  transformers: [
    // https://github.com/unocss/unocss/tree/main/packages/transformer-directives
    transformerDirectives(),

    // https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group
    transformerVariantGroup(),

    ...transformers,
  ],
  // https://github.com/unocss/unocss#safelist
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
