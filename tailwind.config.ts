import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: ['SourceSans', ...defaultTheme.fontFamily.sans],
        display: [['Quantify', ...defaultTheme.fontFamily.sans], { fontVariationSettings: '"wdth" 125' }],
      },
      colors: {
        brand: {
          50: '#e9ebf2',
          100: '#d3d8e5',
          200: '#bdc5d8',
          300: '#a8b2ca',
          400: '#93a0bd',
          500: '#7f8eb0',
          600: '#6b7ca3',
          700: '#586a96',
          800: '#465989',
          900: '#34487c',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
