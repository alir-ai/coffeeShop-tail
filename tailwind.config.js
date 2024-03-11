/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ece0d1",
          300: "#dbc1ac",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        "shadow-normal": "0px 1px 10px rgba(0,0,0,0.5)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily:{
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "DanaBold": "Dana Bold",
        
      }

    },
  },
  plugins: [],
};
