/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        steam: {
          navy: '#1f1d1d',
          navyDeep: '#111111',
          green: '#9FB25B',
          greenBright: '#B7C972',
          orange: '#ff6a3d',
          orangeHover: '#e85a30',
          flame: '#ff6a3d',
          cream: '#efeee9',
          panel: '#efeee9',
          silver: '#d9d6cf',
          body: '#302e2b',
          ink: '#101010',
          charcoal: '#1a1a1a',
          purple: '#2f4358',
          purpleDeep: '#253546',
          blackCard: '#1e1d1d',
        },
        vecturaBg: '#f3f3f4',
        vecturaPanel: '#f6f7fb',
        vecturaText: '#101114',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Anton', 'Impact', 'system-ui', 'sans-serif'],
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
