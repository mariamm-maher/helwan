/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#27285D", // Deep Navy (for headers and navigation)
        secondary: "#475569", // Cool Slate Gray (for descriptions and tables)
        accent: "#B0890F", // Warm Gold (for highlights and CTAs)
        success: "#16A34A", // Emerald Green (for success messages)
        warning: "#D97706", // Amber Gold (for warnings)
        danger: "#DC2626", // Bold Red (for errors)
        background: "#F8FAFC", // Light Ice Gray (for a clean UI background)
        card: "#FFFFFF", // White (for cards and widgets)
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};
