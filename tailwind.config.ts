import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const gradientUtilities = function({ addUtilities }) {
  const newUtilities = {
    '.text-gradient': {
      'background-clip': 'text',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      'text-fill-color': 'transparent',
    },
  };
  addUtilities(newUtilities, ['responsive', 'hover']);
};

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Proxima Nova', 'sans-serif'],
        serif: ['Crimson Text', 'serif']
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        text: {
          primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
        },
        border: 'rgb(var(--color-border) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        info: 'rgb(var(--color-info) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-sunset': 'linear-gradient(45deg, #FF512F, #F09819, #DD2476)',
        'gradient-ocean': 'linear-gradient(45deg, #2193b0, #4CA1AF, #6dd5ed)',
        'gradient-forest': 'linear-gradient(45deg, #11998e, #1CD8D2, #38ef7d)',
        'gradient-lavender': 'linear-gradient(45deg, #834d9b, #B06AB3, #d04ed6)',
        'gradient-fire': 'linear-gradient(45deg, #f12711, #F37335, #f5af19)',
        'gradient-zinc': 'linear-gradient(45deg, #18181b, #27272a, #3f3f46)',
        'gradient-slate': 'linear-gradient(45deg, #1e293b, #334155, #475569)',
        'gradient-gray': 'linear-gradient(60deg, #1f2937, #374151, #4b5563)',
        'gradient-neutral': 'linear-gradient(60deg, #262626, #404040, #525252)',
        'gradient-blue': 'linear-gradient(60deg, #0000FF, #0000FF, #0000FF)',
        'gradient-text': 'linear-gradient(to bottom right, #3f3f46,  #6b7280,#71717a)',
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden'
          },
          '100%': {
            width: '100%'
          }
        },
        blink: {
          '50%': {
            borderColor: 'transparent'
          },
          '100%': {
            borderColor: 'white'
          }
        }
      },
      animation: {
        typing: 'typing 5s steps(50) infinite alternate, blink .7s infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography"), gradientUtilities],
  darkMode: 'class'
}
