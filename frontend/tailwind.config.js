/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: 'var(--bg)',
          surface: 'var(--surface)',
          text: 'var(--text)',
          muted: 'var(--muted)',
          primary: 'var(--primary)',
          accent: 'var(--accent)',
          border: 'var(--border)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        'card': '24px',
        'tile': '20px',
        'btn': '999px',
        'input': '14px',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0,0,0,0.06)',
        'glow': '0 10px 40px -10px rgba(29, 79, 255, 0.28)',
        'glow-teal': '0 10px 40px -10px rgba(14, 116, 144, 0.28)',
      }
    },
  },
  plugins: [],
};
