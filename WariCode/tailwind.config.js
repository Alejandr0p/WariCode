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
          950: '#F8FAFC', // Light Background
          900: '#F1F5F9', // Slightly darker light background
          800: '#E2E8F0', // Borders
        },
        cyber: {
          blue: '#1E3A8A', // Deep Navy Blue
          purple: '#2563EB', // Royal Blue
          cyan: '#3B82F6', // Lighter Blue Accent
          white: '#0B192C', // Using "white" name for text-white replacements, making it dark navy
          glass: 'rgba(30, 58, 138, 0.05)',
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
          '0%': { boxShadow: '0 0 5px rgba(30, 58, 138, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(30, 58, 138, 0.3)' },
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

