// vite.config.js
const { resolve } = require('path')
export default {
    base: '/OgvMitgliederversammlung/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                versammlung2024: resolve(__dirname, "versammlung2024.html"),
                versammlung2025: resolve(__dirname, "versammlung2025.html"),
            }
        },
    }
}
