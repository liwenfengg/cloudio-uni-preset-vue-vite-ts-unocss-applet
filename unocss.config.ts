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


const presets: any = []
const transformers: any = [transformerDirectives()]

console.log('process.env.UNI_PLATFORM', process.env.UNI_PLATFORM)


if (process.env.UNI_PLATFORM === 'h5') {
  presets.push(presetUno())

  transformers.push(transformerVariantGroup())
} else {
  presets.push(presetApplet())
  presets.push(presetRemToRpx())

  transformers.push(transformerRenameClass())
}

presets.push(presetAttributify())
presets.push(presetIcons({
  scale: 1.2,
  warn: true,
}))
presets.push(presetTypography())
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
  ],
  presets,
  transformers,
  // https://github.com/unocss/unocss#safelist
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
