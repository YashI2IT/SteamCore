/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        steam: {
          navy: '#1F4E79',
          navyDeep: '#2F6FA3',
          green: '#2E7D32',
          greenBright: '#3cb371',
          orange: '#F37021',
          orangeHover: '#d35c17',
          flame: '#F39200',
          cream: '#F5F7FA',
          /* Same as cream: main page canvas is consistently #F5F7FA */
          panel: '#F5F7FA',
          silver: '#D1D5DB',
          body: '#4B5563',
          ink: '#111827',
          charcoal: '#1A1A1A',
        },
        vecturaBg: '#f3f3f4',
        vecturaPanel: '#f6f7fb',
        vecturaText: '#101114',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.08em',
      },
      boxShadow: {
        brand: '0 18px 50px rgba(27, 54, 93, 0.12)',
        card: '0 8px 30px rgba(27, 54, 93, 0.08)',
      },
    },
  },
  plugins: [],
}
