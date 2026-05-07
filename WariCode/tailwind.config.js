/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        raven: {
          950: '#000000', // Matrix Black
          900: '#050505',
          800: '#0A0A0A',
        },
        cyber: {
          blue: '#10B981', // Deep Emerald
          purple: '#059669', // Matrix Green
          cyan: '#34D399',
          white: '#FFFFFF',
          glass: 'rgba(16, 185, 129, 0.05)',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Outfit', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 163, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 163, 255, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

