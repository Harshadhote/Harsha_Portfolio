/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      boxShadow:{
        'orange-yellow': '0 10px 15px -3px rgba(255, 165, 0, 0.4), 0 4px 6px -2px rgba(255, 215, 0, 0.3)',
      }
    }
  },
  plugins: []
}

