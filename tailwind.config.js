/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        diagonalRight: {
          "0%": { transform: "translate(0,0) rotate(0deg)" },
          "100%": { transform: "translate(250px,-100px) rotate(10deg)" },
        },
        diagonalLeft: {
          "0%": { transform: "translate(0,0) skew(0deg)" },
          "100%": { transform: "translate(-250px,-100px) rotate(-10deg) " },
        },
      },
      animation: {
        marquee: "marquee 5s linear infinite",
        slideUp: "slideUp .5s ease-in",
        diagonalRight: "diagonalRight .5s forwards ease-out",
        diagonalLeft: "diagonalLeft .5s forwards ease-out",
      },
    },
  },
  plugins: [],
};
