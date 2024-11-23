/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      transitionDuration: {
        '2000': '2000ms',
      },
      container: {
        center: true,
        padding: '1rem'
      },
      screen: {
        '2xl': '992px',
      },
      maxWidth: {
        '2xl': '1600px',
      },
    },
  },
  plugins: [],
}
