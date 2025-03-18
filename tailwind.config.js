// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily:{
           sans: ['Poppins','sans-serif'],
        },
        gridTemplateColumns:{
            '70/30' :'70% 28%',
        } ,
    },
  },
  plugins: [],
};
