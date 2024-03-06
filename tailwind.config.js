/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jacques: ["Jacques Francois", "serif"],
        JetBrains: ["JetBrains Mono", "monospace"],
        Poppins: ["Poppins", "sans-serif"],
        Acme: ["Acme", "sans-serif"],
        textFont: ["Mallanna", "sans-serif"],
        Headingfont: ["Shippori Mincho B1", "serif"],
      },

      screens: {
        xxxS: "390px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
