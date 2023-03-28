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

      const gradientKeyframes = {
        '0%': { 'background-color': 'rgba(79, 70, 229, 1)' },
        '50%': { 'background-color': 'rgba(16, 185, 129, 1)' },
        '100%': { 'background-color': 'rgba(79, 70, 229, 1)' },
      };

      addUtilities({
        '@keyframes spinner': spinnerKeyframes,
        '@keyframes gradient-change': gradientKeyframes,
      });

      const spinnerUtilities = {
        '.spinner': {
          animation: 'spinner 4s linear infinite',
        },
      };

      const gradientUtilities = {
        '.gradient-change': {
          'background-color': 'rgba(79, 70, 229, 1)',
          animation: 'gradient-change 4s linear infinite',
        },
      };

      addUtilities(spinnerUtilities);
      addUtilities(gradientUtilities);
    }),
  ],
};
