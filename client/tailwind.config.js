/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                aura: {
                    navy: '#050A14', // Deepest background
                    box: '#0D1321',  // Main panel background
                    card: '#141C2F', // Component background
                    border: 'rgba(255, 255, 255, 0.08)',
                    cyan: '#00F5FF',
                    amber: '#FFAB00',
                    green: '#00E676',
                    red: '#FF1744',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
