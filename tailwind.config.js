module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        tiny5: ['Tiny5', 'serif'],
        press: ['"Press Start 2P"', 'cursive'], 
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        tilt: 'tilt 2s ease-in-out infinite',

      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(6deg)' },
          '50%': { transform: 'rotate(-6deg)' },
        },

      },
    },
  },
  plugins: [],
};