/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-chocolate': '#3C2A21',
        'warm-brown': '#8B4513',
        'coffee-bean': '#6F4E37',
        'caramel': '#C19A6B',
        'cream-white': '#FFF8DC',
        'warm-ivory': '#FAF7F0',
        'golden-honey': '#DAA520',
        'deep-copper': '#B87333',
        'soft-beige': '#F8F4E6',
        'artemis-bg': '#f8f9fa',
        'artemis-dark': '#664200',
        'artemis-gold': '#916300',
        'artemis-cream': '#FEFBD9'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'warm': '0 10px 30px rgba(60, 42, 33, 0.1)',
        'golden': '0 6px 20px rgba(218, 165, 32, 0.3)',
      },
    },
  },
  plugins: [],
}