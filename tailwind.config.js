/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'border-width': 'border-width 3s infinite alternate',
      },
      keyframes: {
        'border-width': {
          'from': {
            width: '10px',
            opacity: '0',
          },
          'to': {
            width: '100px',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
