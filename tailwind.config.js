export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'zen-green': '#3B7C57',
                'zen-cream': '#FFFDF6',
                'zen-gray': '#2F2F2F',
            },
            fontFamily: {
                sans: ['"Open Sans"', 'sans-serif'],
                display: ['"Quicksand"', 'sans-serif'],
            },
            transitionDuration: {
                4000: '4000ms',
            },
            scale: {
                75: '.75',
                125: '1.25',
            },
            screen: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
        },
    },
    darkMode: 'class', // 🌙 Activate dark mode via a CSS class
    plugins: [],
}