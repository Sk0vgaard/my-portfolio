// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const spinnerKeyframes = {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      };

      addUtilities({
        '@keyframes spinner': spinnerKeyframes,
      });

      const spinnerUtilities = {
        '.spinner': {
          animation: 'spinner 2s linear infinite',
        },
      };

      addUtilities(spinnerUtilities);
    }),
  ],
};
