module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        plata1: '#e8e8e8',
        plata2: '#a8a8a8',
        plata3: '#6b6b6b',
        neon: '#ffffff'
      },
      fontFamily: {
        cursiva: ['Great Vibes', 'Pinyon Script', 'cursive'],
        serif: ['Cormorant Garamond', 'serif'],
        ui: ['Inter', 'system-ui', 'sans-serif']
      },
      keyframes: {
        twinkle: {
          '0%,100%': { opacity: '0.9' },
          '50%': { opacity: '0.6' },
        },
        flicker: {
          '0%,19%,21%,23%,25%,54%,56%,100%': { opacity: 0.99 },
          '20%,24%,55%': { opacity: 0.4 },
        },
        neonGlow: {
          '0%': { 'text-shadow': '0 0 6px rgba(255,255,255,.9)' },
          '100%': { 'text-shadow': '0 0 36px rgba(255,255,255,.35)' },
        }
      }
    }
  },
  plugins: [],
}
