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

import { presetApplet, presetRemToRpx, transformerRenameClass } from 'unocss-applet'

// https://github.com/unocss/unocss/tree/main/packages/preset-attributify/
const presets: any = [presetAttributify()]

// https://github.com/unocss/unocss/tree/main/packages/transformer-directives
const transformers: any = [transformerDirectives()]

console.log('process.env.UNI_PLATFORM', process.env.UNI_PLATFORM)


if (process.env.UNI_PLATFORM === 'h5') {
  // https://github.com/unocss/unocss/tree/main/packages/preset-uno
  presets.push(presetUno())

  // https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group
  transformers.push(transformerVariantGroup())
} else {
  // https://github.com/unocss-applet/unocss-applet
  presets.push(presetApplet())
  presets.push(presetRemToRpx())

  transformers.push(transformerRenameClass())
}

// presets.push(presetAttributify())

// https://github.com/unocss/unocss/tree/main/packages/preset-icons
presets.push(presetIcons({
  scale: 1.2,
  warn: true,
}))

// https://github.com/unocss/unocss/tree/main/packages/preset-typography
presets.push(presetTypography())

// https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts
presets.push(presetWebFonts({
  fonts: {
    sans: 'DM Sans',
    serif: 'DM Serif Display',
    mono: 'DM Mono',
  },
}))


export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['text-b-f', 'text-base text-#F2FFCC'],
  ],

  presets,
  transformers,
  // https://github.com/unocss/unocss#safelist
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
