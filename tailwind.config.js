module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00ABBA',
        seconday: '#FF1493',
        remoteagro: {
          50: '#f0f8eb',
          75: '#e1f1d8',
          100: '#c3e3b0',
          200: '#a4d489',
          300: '#95cd75',
          400: '#86c661',
          500: '#68B83A',
          600: '#53932e',
          700: '#3e6e23',
          800: '#2a4a17',
          DEFAUlT: '#68B83A',
        },
        easybuild: {
          lightpurple: '#F7EAFB',
          purple: '#AC27DB',
          darkpurple: '#9318BE',
          blue: '#0099ff',
          darkblue: '#465FE5',
        },
      },
    },
  },
  variants: {
    extend: {
      flexDirection: ['odd', 'even'],
    },
  },
  plugins: [],
};
