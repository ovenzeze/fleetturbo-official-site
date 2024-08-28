import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'


export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        serif: ['Crimson Text', ...defaultTheme.fontFamily.serif]
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
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")]
}
