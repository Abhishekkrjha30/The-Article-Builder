/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 8px 10px rgba(0, 0, 0, 0.2)', // Custom shadow values
      },
    },
  },
  plugins: [],
}

