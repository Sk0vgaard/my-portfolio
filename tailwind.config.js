const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
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
        require("tw-elements/dist/plugin"),
        plugin(function ({addUtilities}) {
            const spinnerKeyframes = {
                '0%': {transform: 'rotate(0deg)'},
                '100%': {transform: 'rotate(360deg)'},
            };

            const gradientKeyframes = {
                '0%': {'background-color': 'rgba(79, 70, 229, 1)'},
                '50%': {'background-color': 'rgba(16, 185, 129, 1)'},
                '100%': {'background-color': 'rgba(79, 70, 229, 1)'},
            };

            const scrollKeyframes = {
                '10%': { transform: 'translateY(-112%)' },
                '20%': { transform: 'translateY(-100%)' },
                '30%': { transform: 'translateY(-212%)' },
                '40%': { transform: 'translateY(-200%)' },
                '50%': { transform: 'translateY(-312%)' },
                '60%': { transform: 'translateY(-300%)' },
                '70%': { transform: 'translateY(-412%)' },
                '80%': { transform: 'translateY(-400%)' },
                '90%': { transform: 'translateY(-500%)' },
                '100%': { transform: 'translateY(-512%)' },
            };

            addUtilities({
                '@keyframes spinner': spinnerKeyframes,
                '@keyframes gradient-change': gradientKeyframes,
                '@keyframes text-scroll': scrollKeyframes,
            });

            const spinnerUtilities = {
                '.spinner': {
                    animation: 'spinner 4s linear infinite',
                },
            };

            const gradientUtilities = {
                '.gradient-change': {
                    'background-color': 'rgba(79, 70, 229, 1)',
                    animation: 'gradient-change 6s linear infinite',
                },
            };

            const scrollUtilities = {
                '.text-scroll': {
                    animation: 'text-scroll 8s infinite',
                },
            };

            addUtilities(spinnerUtilities);
            addUtilities(gradientUtilities);
            addUtilities(scrollUtilities);
        }),
    ],
};
