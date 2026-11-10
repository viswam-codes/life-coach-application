/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf8f6',
          100: '#fbeee8',
          200: '#f6dcd0',
          300: '#eebd9e',
          400: '#e3946b',
          500: '#d97243',
          600: '#b44d28', /* Warm Executive Terracotta */
          700: '#963b1a',
          800: '#7a3117',
          900: '#642b17',
        },
        dark: {
          900: '#0b1120', /* Obsidian Midnight */
          800: '#0f172a',
          700: '#1e293b',
          600: '#334155',
          500: '#475569',
        },
        warm: {
          bg: '#faf8f5',
          surface: '#ffffff',
          subtle: '#f5f2ed',
          border: '#e8e4de',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(180, 77, 40, 0.35)',
        'executive': '0 20px 40px -15px rgba(15, 23, 42, 0.12)',
        'subtle': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}

