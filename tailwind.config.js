const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        min: 'var(--color-min)',
        max: 'var(--color-max)',
        action: {
          boosted: 'var(--action-boosted)',
          max: 'var(--action-max)',
          DEFAULT: 'var(--action-default)',
          muted: 'var(--action-muted)',
          pale: 'var(--action-pale)',
        },
        danger: {
          boosted: 'var(--danger-boosted)',
          max: 'var(--danger-max)',
          DEFAULT: 'var(--danger-default)',
          muted: 'var(--danger-muted)',
          pale: 'var(--danger-pale)',
        },
        warning: {
          boosted: 'var(--warning-boosted)',
          max: 'var(--warning-max)',
          DEFAULT: 'var(--warning-default)',
          muted: 'var(--warning-muted)',
          pale: 'var(--warning-pale)',
        },
        success: {
          boosted: 'var(--success-boosted)',
          max: 'var(--success-max)',
          DEFAULT: 'var(--success-default)',
          muted: 'var(--success-muted)',
          pale: 'var(--success-pale)',
        },
        neutral: {
          DEFAULT: 'var(--neutral-default)',
          boosted: 'var(--neutral-boosted)',
          max: 'var(--neutral-max)',
          muted: 'var(--neutral-muted)',
          pale: 'var(--neutral-pale)',
        },
        pastel1: {
          DEFAULT: 'var(--pastel1-default)',
          max: 'var(--pastel1-max)',
          boosted: 'var(--pastel1-boosted)',
          muted: 'var(--pastel1-muted)',
        },
        pastel2: {
          DEFAULT: 'var(--pastel2-default)',
          max: 'var(--pastel2-max)',
          boosted: 'var(--pastel2-boosted)',
          muted: 'var(--pastel2-muted)',
        },
        pastel3: {
          DEFAULT: 'var(--pastel3-default)',
          max: 'var(--pastel3-max)',
          boosted: 'var(--pastel3-boosted)',
          muted: 'var(--pastel3-muted)',
        },
        pastel4: {
          DEFAULT: 'var(--pastel4-default)',
          max: 'var(--pastel4-max)',
          boosted: 'var(--pastel4-boosted)',
          muted: 'var(--pastel4-muted)',
        },
        pastel5: {
          DEFAULT: 'var(--pastel5-default)',
          max: 'var(--pastel5-max)',
          boosted: 'var(--pastel5-boosted)',
          muted: 'var(--pastel5-muted)',
        },
      },
      backgroundColor: {
        DEFAULT: 'var(--bg-default)',
        muted: 'var(--bg-muted)',
        pale: 'var(--bg-pale)',
      },
      textColor: {
        DEFAULT: 'var(--text-default)',
        boosted: 'var(--text-boosted)',
        subdued: 'var(--text-subdued)',
        muted: 'var(--text-muted)',
        pale: 'var(--text-pale)',
      },
      ringColor: ({ theme }) => ({
        DEFAULT: 'var(--action-default)',
        ...theme('colors'),
      }),
      fontFamily: {
        sans: ['var(--inter-font)', ...defaultTheme.fontFamily.sans],
      },
      outlineColor: ({ theme }) => ({
        DEFAULT: 'var(--action-muted)',
        ...theme('colors'),
      }),
    },
  },
  plugins: [],
}
