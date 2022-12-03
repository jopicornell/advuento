/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}', 'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      green: '#42b883', 'gray-dark': '#0f172a'
    }
  },
  plugins: [require('flowbite/plugin')]
}
