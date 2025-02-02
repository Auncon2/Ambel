/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeLoop: {
          "0%, 50%": { opacity: 0, transform: "translateY(10px)" },
          "50%, 100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        fadeLoop: "fadeLoop 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
