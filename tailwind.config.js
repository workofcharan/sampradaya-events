/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sampradaya: {
          cream: '#FBF4E6',
          ivory: '#FFFBF5',
          parchment: '#F5EBD7',
          parchmentDark: '#EBDDC0',
          maroon: '#7A1F2B',
          maroonDark: '#56131C',
          maroonLight: '#942B39',
          red: '#C0392B',
          redDark: '#962D22',
          redLight: '#FDEDEC',
          saffron: '#E8833A',
          saffronDark: '#D35400',
          saffronLight: '#FEF5E7',
          marigold: '#F4B63F',
          marigoldDark: '#D4AC0D',
          marigoldLight: '#FEF9E7',
          gold: '#C9A24B',
          goldLight: '#E8D295',
          goldDark: '#9C7A28',
          goldBright: '#F4C430',
          cocoa: '#2B1810',
          cocoaDark: '#1A0E0A',
          cocoaLight: '#3D2418',
          brownMuted: '#7E6356',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
      },
      boxShadow: {
        'festive': '0 4px 20px -2px rgba(43, 24, 16, 0.08), 0 2px 6px -1px rgba(122, 31, 43, 0.06)',
        'festive-hover': '0 12px 30px -4px rgba(43, 24, 16, 0.15), 0 6px 14px -2px rgba(201, 162, 75, 0.2)',
        'royal': '0 20px 50px -10px rgba(43, 24, 16, 0.4), 0 0 30px rgba(201, 162, 75, 0.15)',
        'gold-glow': '0 0 25px rgba(201, 162, 75, 0.35)',
        'maroon-glow': '0 0 30px rgba(122, 31, 43, 0.4)',
      },
      backgroundImage: {
        'paper-grain': "radial-gradient(#C9A24B 0.5px, transparent 0.5px), radial-gradient(#C9A24B 0.5px, #FBF4E6 0.5px)",
      }
    },
  },
  plugins: [],
}
