/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            gridTemplateColumns: {
                '70/30': '70% 28%',
            },
            colors: {
                footer: "#1C1C1C",
                stripeBg: "#222122",
            },
            maxWidth: {
                '8xl': "1800px",
            },
        },
    },
    variants: {
        extends: {},
    },
    plugins: [],
}

