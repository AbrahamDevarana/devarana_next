/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            mulish: ['Mulish', 'sans-serif'],
            playfair: ['Playfair Display', 'sans-serif'],

        },
        colors: {
            'devarana-blue' : '#56739B',
            'devarana-babyblue' : '#a9c0e4',
            'devarana-pink' : '#d64767',
            'devarana-midnight' : '#242a38',
            'devarana-hazelnut' : '#eadfd4',
            'devarana-pearl' : '#F9F9F7',
            'devarana-graph' : '#656a76',
            'devarana-graph-darker' : '#484B65',
            'devarana-pollito' : '#ffdea4',
            'devarana-salmon' : '#fabcab'
        },
        
        transitionProperty: {
            'height': 'height',
            'backgroundImage':'backgroundImage',
            'top' : 'top',
            'left' : 'left',
          },  
        backgroundImage: {
            'formulario': "url('/assets/images/global/Formulario.webp')",
            'credenza': "url('/assets/images/home/Credenza.webp')",
            'fotoSalonIngles': "url('/assets/images/home/FotoSalonIngles.webp')",
        },
      },
    },
    plugins: [],
  }