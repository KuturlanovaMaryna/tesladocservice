/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        montserrat: ["var(--font-montserrat)"],
      },
      height: {
        footer: "58px",
      },
      spacing: {
        footerpadding: "120px",
        footermargin: "215px",
      },
      colors: {
        darkbcg: "#111",
        whitetext: "#fcfcf7",
        white: "#fff",
        red: "#c62828",
        darktext: "#1a1a1a",
        whitebcg: "#fdfdfd",
        whitedisable: "rgba(255, 255, 255, 0.5)",
        darkcardbcg: "#1a1a1a",
        inputstrokedefault: "#7a7a7a",
      },
    },
  },
  plugins: [],
};
