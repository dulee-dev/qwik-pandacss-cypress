import { defineConfig } from '@pandacss/dev';
import { COLORS_TOKEN } from './styles/color.token';

export default defineConfig({
  jsxFramework: 'qwik',

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  strictTokens: true,
  emitTokensOnly: true,

  // for dev set false
  // optimize: true,
  // minify: true

  shorthands: false,

  // Useful for theme customization
  theme: {
    tokens: {
      colors: COLORS_TOKEN,
      fontSizes: {
        base: { value: '1rem' },
      },
    },
  },

  // The output directory for your css system
  outdir: 'src/styled-system',
});
