/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // เพิ่มเพื่อให้ Tailwind ทำงานในไฟล์ React  
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}

