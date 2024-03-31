// vite.config.js
const { resolve } = require('path')
export default {
    base: '/OgvMitgliederversammlung/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                versammlung2024: resolve(__dirname, "versammlung2024.html"),
            }
        },
    }
}
