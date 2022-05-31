module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {'orange': 'rgba(255, 131, 7, 0.95)', 'back':'#292929', 'inside': '#121212'},
      colors:    {'orange': 'rgba(255, 131, 7, 0.95)', 'back':'#292929', 'inside': '#121212'},
      shadow:    {'orange': 'rgba(255, 131, 7, 0.95)', 'back':'#292929', 'inside': '#121212'},
      fontFamily: {
        'title': 'Fredoka One',
        'sans': 'Poppins, sans-serif',
      }
    },
  },
    
  }

  variants: {
    extend: {

    }
  }
  plugins: [
     require('@tailwindcss/custom-forms'),
  ]

