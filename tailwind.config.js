// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
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
        },
    },
    darkMode: 'class', // ⚠️ active le dark mode basé sur une classe
    plugins: [],
}