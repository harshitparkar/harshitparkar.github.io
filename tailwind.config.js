/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0a0f',
        'deep-void': '#111118',
        'midnight-navy': '#1a1a2e',
        gold: '#c9a96e',
        'gold-warm': '#e8c484',
        bone: '#f5f0e8',
        ash: '#888888',
        hairline: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'display': '-0.02em',
        'wide-brand': '0.35em',
        'mono-wide': '0.4em',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee2': 'marquee2 40s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'draw-in': 'drawIn 800ms cubic-bezier(0.76, 0, 0.24, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: 0.3, transform: 'translateY(0)' },
          '50%': { opacity: 1, transform: 'translateY(40px)' },
        },
        drawIn: {
          'from': { strokeDashoffset: '400' },
          'to': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};
