/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: [ 'Ubuntu', 'Noto Sans Thai', 'Mitr', 'Kanit' ],
        NotoSerif: [ 'Noto Serif', 'Kanit', 'Mitr', 'Noto Sans Thai', 'Ubuntu' ],
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, 1.8s infinite", //use blink after , to make the | blink
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

