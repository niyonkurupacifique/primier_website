/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        mydivcolor:'#37003C',
        mybgcolor:'#26C4FF',
        mycolor:'#38114F',
        mytextcolor:'#05F0FF',
        footerColor:'#37003C',

      },
      fontFamily:{
        mydivFontFamily:"PremierSans-Bold",
      },
    fontWeight:{
      mydivfontweight:400
    },
    fontSize:{
      mydivfontsize:15,
      fontsizeofprimier:'39px'
    }
  


      
    },
  },
  plugins: [],
}
