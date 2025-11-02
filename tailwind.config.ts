import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          600: "#D97706",
        },
        "deep-indigo": {
          900: "#1B1A3A",
        },
        "temple-stone": {
          700: "#4B5563",
          200: "#E5E7EB",
        },
        "gilded-gold": {
          500: "#C6A34F",
        },
        "peacock-teal": {
          700: "#0F766E",
        },
        "lotus-rose": {
          400: "#F472B6",
        },
        text: {
          primary: "#1F2937",
          muted: "#4B5563",
        },
      },
      fontFamily: {
        heading: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-noto)", "serif"],
      },
      animation: {
        "petal-float": "petal-float 15s ease-in-out infinite",
        "gold-shimmer": "gold-shimmer 1s linear infinite",
      },
      keyframes: {
        "petal-float": {
          "0%": {
            transform: "translateY(100vh) translateX(0) rotate(0deg)",
            opacity: "0",
          },
          "10%": {
            opacity: "0.3",
          },
          "90%": {
            opacity: "0.3",
          },
          "100%": {
            transform: "translateY(-10vh) translateX(20px) rotate(360deg)",
            opacity: "0",
          },
        },
        "gold-shimmer": {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

