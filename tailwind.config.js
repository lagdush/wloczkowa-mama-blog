module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        superLarge: '53.375rem',
        extraLarge: '50.25rem',
      },
      height: {
        mobile: '235px',
        superLarge: '33.3125rem',
      },
      boxShadow: {
        minimal: '0px 1px 0px 0px rgba(0,0,0,0.16)',
      },
      gridTemplateRows: {
        mainLayout: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        columnHeightFull: '100%',
      },
      fontFamily: {
        sans: ['Fira Sans', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#212121',
        secondary: '#757575',
        highlighted: '#C2185B',
        light: '#F8BBD0',
        accent: '#448AFF',
        myWhite: '#F8F9FA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
