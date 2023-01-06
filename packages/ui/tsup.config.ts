import { defineConfig } from 'tsup'
// @ts-ignore
import babel from 'esbuild-plugin-babel'

export default defineConfig({
  entry: ['src/index.tsx'],
  splitting: false,
  sourcemap: true,
  dts: true,
  format: ['esm', 'cjs'],
  external: [
    'react',
    'twin.macro',
    '@tanstack/react-router',
    '@radix-ui/colors',
    '@emotion/css',
    '@radix-ui/react-slider',
    '@radix-ui/react-scroll-area',
    '@radix-ui/react-toggle-group',
    '@radix-ui/react-switch',
  ],
  esbuildPlugins: [
    (babel as any)({
      config: {
        presets: [
          '@babel/preset-react',
          '@babel/preset-typescript',
          '@emotion/babel-preset-css-prop',
        ],
        plugins: [
          '@emotion/babel-plugin',
          'babel-plugin-twin',
          'babel-plugin-macros',
        ],
      },
    }),
  ],
})
