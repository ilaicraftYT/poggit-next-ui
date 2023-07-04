/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false // Mantine already has its own preflight
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {}
  },
  plugins: [],
}
