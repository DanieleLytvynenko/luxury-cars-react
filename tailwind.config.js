/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        body: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        accent: "#E8FF00",
        "accent-dark": "#C9DC00",
        dark: {
          DEFAULT: "#0D0D0D",
          2: "#161616",
          3: "#1E1E1E",
          4: "#2A2A2A",
        },
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scrollHint: {
          "0%, 100%": { opacity: "1", top: "6px" },
          "50%": { opacity: "0", top: "18px" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.4s ease both",
        float: "float 4s ease-in-out infinite",
        scrollHint: "scrollHint 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
