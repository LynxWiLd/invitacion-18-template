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
        cursiva: ['Great Vibes', 'cursive'],
        serif: ['Cormorant Garamond', 'serif'],
        ui: ['Inter', 'system-ui', 'sans-serif']
      },
      keyframes: {
        twinkle: {
          '0%,100%': { opacity: '0.9' },
          '50%': { opacity: '0.6' },
        },
        flicker: {
          '0%,19%,21%,23%,25%,54%,56%,100%': { opacity: '0.99' },
          '20%,24%,55%': { opacity: '0.4' },
        },
        neonGlow: {
          '0%': { textShadow: '0 0 6px rgba(255,255,255,.9)' },
          '100%': { textShadow: '0 0 36px rgba(255,255,255,.35)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-18px) rotate(6deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0)' },
          to: { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        flicker: 'flicker 3s infinite',
        neonGlow: 'neonGlow 2s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 5.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
      }
    }
  },
  plugins: [],
}
